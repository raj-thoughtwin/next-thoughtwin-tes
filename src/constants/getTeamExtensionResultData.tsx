export function renderResult(data: any): any[] {
  const result: any[] = [];

  data?.forEach((section: any) => {
    const base = {
      title: section.title,
      desc: typeof section.desc === "string" && section.desc.trim() !== "" ? section.desc : undefined,
    };

    if (typeof section.value === "string") {
      result.push({
        ...base,
        value: section.value,
      });
    } else if (Array.isArray(section.value)) {
      // Specialists list
      result.push({
        ...base,
        value: section.value.map((item: any) => ({
          label: item.label,
          count: item.count,
        })),
      });
    } else if (typeof section.value === "object") {
      // Technologies
      const techTree: any = {};
      for (const category in section.value) {
        techTree[category] = section.value[category].map((levelObj: any) => {
          const level = Object.keys(levelObj)[0];
          const skills = levelObj[level];
          return {
            [level]: skills.map((skill: any) => ({
              label: skill.label,
              count: skill.count,
            })),
          };
        });
      }

      result.push({
        ...base,
        value: techTree,
      });
    }
  });

  return result;
}
