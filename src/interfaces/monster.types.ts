interface Speed {
  swim: number;
  burrow: number;
  walk: number;
}

interface Skills {
  athletics: number;
  perception: number;
  stealth: number;
}

interface Action {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage_dice?: string;
}

interface SpecialAbility {
  name: string;
  desc: string;
}

export interface MonsterType {
  slug: string;
  desc: string;
  name: string;
  size: string;
  type: string;
  subtype: string;
  group: string | null;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: number | null;
  dexterity_save: number | null;
  constitution_save: number | null;
  intelligence_save: number | null;
  wisdom_save: number | null;
  charisma_save: number | null;
  perception: number;
  skills: Skills;
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  cr: number;
  actions: Action[];
  bonus_actions: null;
  reactions: null;
  legendary_desc: string;
  legendary_actions: null;
  special_abilities: SpecialAbility[];
  spell_list: unknown[];
  page_no: number;
  environments: unknown[];
  img_main: string | null;
  document__slug: string;
  document__title: string;
  document__license_url: string;
  document__url: string;
}
