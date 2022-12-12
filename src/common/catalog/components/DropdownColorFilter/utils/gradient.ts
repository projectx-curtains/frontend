export const createSteppedGradient = (
  sections: string[],
  gradientDirection = "bottom"
): { background: string } => {
  const sectionAvgHeight = 100 / sections.length;
  const isFirstSection = 0;
  const isLastSection = sections.length;
  return {
    background: `linear-gradient(to ${gradientDirection}, ${sections.map(
      (section: string, index: number) => {
        switch (index) {
        case isFirstSection:
          return `${section} ${sectionAvgHeight}%`;
        case isLastSection:
          return `${section} ${sectionAvgHeight * (index + 1)}%`;
        default:
          return `${section} ${sectionAvgHeight * index}% ${
            sectionAvgHeight * (index + 1)
          }%`;
        }
      }
    )})`,
  };
};
