export enum CurtainTypeEnum {
  austrian = "austrian",
  english = "english",
  imperial = "imperial",
  italian = "italian",
  classic = "classic",
  thread = "thread",
  romian = "romian",
  crossed = "crossed",
  french = "french",
}

export enum TabsEnum {
  parameters = 0,
  design = 1,
  colorPicker = 2,
}

export type CurtainWithoutSections =
  | CurtainTypeEnum.austrian
  | CurtainTypeEnum.english
  | CurtainTypeEnum.french;
