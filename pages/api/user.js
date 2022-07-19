import { collection, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function handler(req, res) {
  const { uid } = req.body;
  res.status(200).json({ name: 'John Doe', c: 'asd' });
}
