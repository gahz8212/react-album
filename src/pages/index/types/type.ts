export type CardDTO = {
  alt_description: string;
  blur_hash: string;
  breadcrumbs: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Link;
  promoted_at?: string;
  slug: string;
  sponsorship?: string;
  tags: Tag[];
  topic_submissions: unknown;
  updated_at: string;
  urls: Url;
  user: unknown;
  width: number;
  status: number;
};

type Link = {
  download: string;
  download_location: string;
  html: string;
  self: string;
};

export type Tag = {
  source: {
    ancestry: unknown;
    cover_photo: unknown;
    description: string;
    meta_description: string;
    meta_title: string;
    subtitle: string;
    title: string;
  };
  title: string;
  type: string;
};

type Url = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
};
