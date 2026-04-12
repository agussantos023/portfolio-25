import { IconName } from './icons';

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  techStack: IconName[];
  link?: string;
}
