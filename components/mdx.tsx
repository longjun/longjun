import Image from "next/image";
import { useMDXComponent } from 'next-contentlayer/hooks';

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  Image: RoundedImage,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-pre:bg-gray-100">
      <Component components={{ ...components }} />
    </article>
  );
}