import { useRouter } from 'next/router';

export default function Note() {
  const router = useRouter();

  return <h1>This a note (dynamic routing). Path params: {router.query.note}</h1>;
}
