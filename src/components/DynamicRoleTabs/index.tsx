import { Tab, Tabs } from "react-bootstrap";
import CalculatorRoleInputField from "../CalculatorRoleInputField";
import { sendEvent } from "@/lib/ga";

interface RoleTabData {
  role: string;
  data: any;
}

interface DynamicRoleTabsProps {
  roles: RoleTabData[];
  handleChange: (label: string, count: number) => void;
  formData: any;
  setFormData: (val: any) => void;
  activeMainTab: string;
  activeInnerTab: string;
  setActiveInnerTab: (key: string) => void;
}

const DynamicRoleTabs = ({
  roles,
  handleChange,
  formData,
  setFormData,
  activeMainTab,
  activeInnerTab,
  setActiveInnerTab,
}: DynamicRoleTabsProps) => {
  const handleInnerTabChange = (tabKey: string | null) => {
    if (!tabKey) return;

    setActiveInnerTab(tabKey);

    // Ensure entry exists in formData
    setFormData((prev: any) => {
      const existing = prev.step1Technology?.[activeMainTab] || [];
      const alreadyHas = existing.some((entry: any) => Object.keys(entry)[0] === tabKey);
      return {
        ...prev,
        step1Technology: {
          ...prev.step1Technology,
          [activeMainTab]: alreadyHas ? existing : [...existing, { [tabKey]: [] }],
        },
      };
    });
  };

  return (
    <Tabs
      activeKey={activeInnerTab}
      id="dynamic-role-tabs"
      className="mb-0"
      onSelect={(selectedTabKey) => {
        if (selectedTabKey !== activeInnerTab) {
          handleInnerTabChange(selectedTabKey);
          sendEvent({
            action: "calculator_tab_click",
            category: "click",
            label: "Dynamic Role Tabs",
          });
        }
      }}
    >
      {roles.map((roleData: any) => (
        <Tab
          eventKey={roleData.role}
          title={roleData.role}
          key={roleData.role}
          className="pt-4"
        >
          {/* Only render when it matches the active tab to avoid hydration mismatch */}
          {activeInnerTab === roleData.role && (
            <CalculatorRoleInputField
              data={roleData.data}
              isAddSection={false}
              handleChange={handleChange}
              formData={formData}
              activeMainTab={activeMainTab}
              activeInnerTab={activeInnerTab}
            />
          )}
        </Tab>
      ))}
    </Tabs>
  );
};

export default DynamicRoleTabs;
