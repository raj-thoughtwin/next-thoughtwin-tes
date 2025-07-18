import commonstyles from "../Calculator/commancss.module.scss";
import { Accordion, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { TabData } from "@/constants/TabData";
import CalculatorRoleInputField from "../CalculatorRoleInputField";
import Image from "next/image";
import WebIcon from "../../../public/assets/images/Web.svg";
import Mobile from "../../../public/assets/images/Mobile.svg";
import DevOpsIcon from "../../../public/assets/images/DevOps.svg";
import DatabaseIcon from "../../../public/assets/images/database.svg";
import ErpIcon from "../../../public/assets/images/erp.svg";

const tabList = [
  { key: "web", label: "Web", icon: WebIcon },
  { key: "mobile", label: "Mobile", icon: Mobile },
  { key: "devops", label: "DevOps", icon: DevOpsIcon },
  { key: "database", label: "Database", icon: DatabaseIcon },
  { key: "erp", label: "ERP", icon: ErpIcon },
];

const TeamExtensionCalculatorMobileAccordian = ({ formData, setFormData }: any) => {
  const [activeInnerTabs, setActiveInnerTabs] = useState<any>({});

  const getTotalCountForTab = (tabKey: any) => {
    const tabData = formData?.step1Technology?.[tabKey] || [];
    let total = 0;
    tabData.forEach((group: any) => {
      const key = Object.keys(group)[0];
      const roles = group[key] || [];
      roles.forEach((role: any) => {
        total += role?.count || 0;
      });
    });
    return total;
  };

  const handleTechChange = (label: string, count: number, activeMainTab: string, activeInnerTab: string) => {
    if (!activeInnerTab) return;

    setFormData((prev: any) => {
      const prevData = prev.step1Technology?.[activeMainTab] || [];
      const updatedLevelData = [...prevData];

      const index = updatedLevelData.findIndex((item) => Object.keys(item)[0] === activeInnerTab);

      if (index !== -1) {
        let existing = updatedLevelData[index][activeInnerTab] || [];
        const existingIndex = existing.findIndex((item: any) => item.label === label);

        if (existingIndex !== -1) {
          existing[existingIndex].count = count;
        } else {
          existing.push({ label, count });
        }

        updatedLevelData[index] = { [activeInnerTab]: existing };
      } else {
        updatedLevelData.push({ [activeInnerTab]: [{ label, count }] });
      }

      return {
        ...prev,
        step1Technology: {
          ...prev.step1Technology,
          [activeMainTab]: updatedLevelData,
        },
      };
    });
  };

  return (
    <div className={`${commonstyles.MobileTab} d-lg-none d-md-none d-block`}>
      <section className={commonstyles.TeamExtensionStep1}>
        <Accordion defaultActiveKey="0" className="border-0">
          {tabList.map((tab: any, index) => {
            const roles = TabData[tab.key] || [];
            return (
              <Accordion.Item eventKey={String(index)} key={tab.key}>
                <Accordion.Header>
                  <div className={commonstyles.List_Left}>
                    <div className="Left_Link d-flex align-items-center">
                      <Image src={tab.icon} alt={tab.label} width={24} height={24} />
                      <h4 className="ms-2 mb-0">{tab.label}</h4>
                      <h5 className="ms-auto mb-0">({getTotalCountForTab(tab.key)})</h5>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Tabs
                    activeKey={activeInnerTabs[tab.key] || roles[0]?.role}
                    onSelect={(selectedTab) => setActiveInnerTabs((prev: any) => ({ ...prev, [tab.key]: selectedTab }))}
                    id={`${tab.key}-inner-tabs`}
                    className="mb-0"
                  >
                    {roles.map((roleData: any) => (
                      <Tab eventKey={roleData.role} title={roleData.role} key={roleData.role} className="pt-3">
                        <CalculatorRoleInputField
                          data={roleData.data}
                          isAddSection={false}
                          handleChange={(label: any, count: any) => handleTechChange(label, count, tab.key, roleData.role)}
                          formData={formData}
                          setFormData={setFormData}
                          activeMainTab={tab.key}
                          activeInnerTab={roleData.role}
                          setActiveInnerTab={(innerTab: any) => setActiveInnerTabs((prev: any) => ({ ...prev, [tab.key]: innerTab }))}
                        />
                      </Tab>
                    ))}
                  </Tabs>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
};

export default TeamExtensionCalculatorMobileAccordian;
