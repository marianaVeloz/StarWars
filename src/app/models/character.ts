export interface CharacterLocationRef {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string[];
  eye_color: string;
  mass: string[];
  url: string;
  created: string;
}
