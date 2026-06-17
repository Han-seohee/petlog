export interface Author {
  nickname: string;
  profileImage?: string;
}

export interface PetRecordProps {
  icon: string;
  name: string;
  count: number;
  author: Author;
  recordedAt: string;
  memo?: string;
}

export type PetRecordListProps = {
  author: Author;
  memo?: string;
  recordedAt: string;
};