import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: "Nothing's here",
};

export default function NotFound() {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  );
}
