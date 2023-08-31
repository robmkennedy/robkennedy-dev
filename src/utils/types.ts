export enum SkillType {
    'SKILL_DESIGN' = 'SKILL_DESIGN',
    'SKILL_DEVELOPMENT' = 'SKILL_DEVELOPMENT',
    'SKILL_GENERAL' = 'SKILL_GENERAL'
};

export type LayoutState  = {
    sidePanelOpen: boolean
    selectedSkillType: SkillType
};