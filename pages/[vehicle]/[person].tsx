import { useRouter } from 'next/router';

export default function Person() {
  const router = useRouter();

  return (
    <h1>
      This a more dynamic routing. Path params: {router.query.vehicle}/{router.query.person}
    </h1>
  );
}
