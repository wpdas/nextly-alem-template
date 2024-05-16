import { Social } from "alem";

interface NEARSocialUserProfile {
  name?: string;
  linktree?: {
    twitter?: string;
    github?: string;
    telegram?: string;
    website?: string;
  };
  image?: {
    ipfs_cid?: string;
  };
  description?: string;
  backgroundImage?: {
    url?: string;
  };
  tags?: Record<string, string>;
  horizon_tnc?: string;
}

const getProfile = (accountId?: string) => {
  if (accountId) {
    return Social.getr<NEARSocialUserProfile>(`${accountId}/profile`);
  }
  return null;
};

export default getProfile;
