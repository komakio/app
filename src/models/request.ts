export interface Request {
  _id: string;
  status: 'pending';
  firstName: string;
  requesterProfileId: string;
  acceptorProfileId: string;
  type: 'misc';
  createdAt: string;
  profileIds: string[];
  updatedAt: string;
}
