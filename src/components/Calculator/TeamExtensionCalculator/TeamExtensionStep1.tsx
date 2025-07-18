import { useState, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import Image from "next/image";
import { TabData } from "@/constants/TabData";
import { DynamicRoleTabs, TeamExtensionCalculatorMobileAccordian } from "@/components";
import WebIcon from "../../../../public/assets/images/Web.svg";
import Mobile from "../../../../public/assets/images/Mobile.svg";
import DevOpsIcon from "../../../../public/assets/images/DevOps.svg";
import DatabaseIcon from "../../../../public/assets/images/database.svg";
import ErpIcon from "../../../../public/assets/images/erp.svg";
import commonstyles from "../commancss.module.scss";
import { sendEvent } from "@/lib/ga";
import { TeamExtensionStepProps } from "@/types/calculatorTypes";

type TabKey = keyof typeof TabData;

const TeamExtensionStep1: React.FC<TeamExtensionStepProps> = ({ formData, setFormData }) => {
  const [activeMainTab, setActiveMainTab] = useState<TabKey>("web");
  const [activeInnerTab, setActiveInnerTab] = useState("middle");

  // Hydrate tab state from formData
  useEffect(() => {
  const tabs = ["web", "mobile", "devops", "database", "erp"];
  for (const tab of tabs) {
    const dataForTab = formData?.step1Technology?.[tab];
    if (dataForTab && dataForTab.length > 0) {
      setActiveMainTab(tab as TabKey);

      const firstInnerGroup = dataForTab[0];
      const firstInnerKey = firstInnerGroup && Object.keys(firstInnerGroup)[0];

      if (firstInnerKey) {
        setActiveInnerTab(firstInnerKey);
      } else {
        // fallback to default
        const defaultInner = TabData[tab as TabKey]?.[0]?.role || "middle";
        setActiveInnerTab(defaultInner);
      }

      break;
    }
  }
}, []);

useEffect(() => {
  const innerRoles = TabData[activeMainTab];
  if (innerRoles && innerRoles.length > 0) {
    setActiveInnerTab(innerRoles[0].role); // e.g. "Middle"
  }
}, [activeMainTab]);


  const handleMainTabChange = (tab: string | null) => {
    sendEvent({
      action: "calculator_Main_click",
      category: "cilck",
      label: "Main Tab Click",
    });
    if (tab) {
      setActiveMainTab(tab as any);
      setActiveInnerTab("middle");

      setFormData((prev) => ({
        ...prev,
        step1Technology: {
          ...prev.step1Technology,
          [tab]: [],
        },
      }));
    }
  };

  const getTotalCountForTab = (tabKey: string) => {
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

  const hasAnyCount = () => {
  const techData = formData?.step1Technology || {};
  for (const tab in techData) {
    const innerGroups = techData[tab];
    for (const group of innerGroups) {
      const key = Object.keys(group)[0];
      const roles = group[key] || [];
      for (const role of roles) {
        if (role.count > 0) return true;
      }
    }
  }
  return false;
};


  const handleTechChange = (label: string, count: number) => {
    if (!activeInnerTab) return;

    setFormData((prev) => {
      const prevData = prev.step1Technology?.[activeMainTab as any] || [];
      let updatedLevelData = [...prevData];

      const index = updatedLevelData.findIndex((item) => item[activeInnerTab]);

      if (index !== -1) {
        let existing = updatedLevelData[index][activeInnerTab] || [];
        const existingIndex = existing.findIndex((item) => item.label === label);

        if (existingIndex !== -1) {
          existing[existingIndex].count = count;
        } else {
          existing.push({ label, count });
        }

        updatedLevelData[index] = { [activeInnerTab]: existing };
      } else {
        updatedLevelData.push({
          [activeInnerTab]: [{ label, count }],
        });
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
    <div>
      <section className={`${commonstyles.TeamExtensionStep1} d-lg-block d-md-block d-none`}>
        <div className="row">
          <div className={`${commonstyles.RightBorder} `}>
            {/* <Tab.Container id="left-tabs-example" defaultActiveKey="web" onSelect={() => handleMainTabChange}> */}
            <Tab.Container id="left-tabs-example" activeKey={activeMainTab as any} onSelect={(selectedTab) => handleMainTabChange(selectedTab)}>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <Nav variant="pills" className="flex-column">
                    <div className={commonstyles.List_Left}>
                      {[{ key: "web", icon: WebIcon, label: "Web" },
                        { key: "mobile", icon: Mobile, label: "Mobile" },
                        { key: "devops", icon: DevOpsIcon, label: "DevOps" },
                        { key: "database", icon: DatabaseIcon, label: "Database" },
                        { key: "erp", icon: ErpIcon, label: "ERP" }].map(({ key, icon, label }) => (
                        <div className="Left_Link" key={key}>
                          <Nav.Link eventKey={key}>
                            <div className={commonstyles.InnerList}>
                              <Image src={icon} alt="software development company" title="" />
                              <h4>{label}</h4>
                            </div>
                            <h5>({getTotalCountForTab(key)})</h5>
                          </Nav.Link>
                        </div>
                      ))}
                    </div>
                  </Nav>
                </div>
                <div className={`${commonstyles.PaddingLeft} col-lg-8 col-md-6`}>
                  <div className={`${commonstyles.Right_TeamTab} Right_TeamTab`}>
                    <Tab.Content>
                      {Object.entries(TabData).map(([tabKey, roles]) => (
                        <Tab.Pane eventKey={tabKey} key={tabKey}>
                          <DynamicRoleTabs
                            roles={roles as any}
                            handleChange={handleTechChange}
                            formData={formData}
                            setFormData={setFormData}
                            activeMainTab={activeMainTab as any}
                            activeInnerTab={activeInnerTab}
                            setActiveInnerTab={setActiveInnerTab}
                          />
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </div>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </section>
      <TeamExtensionCalculatorMobileAccordian formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default TeamExtensionStep1;
