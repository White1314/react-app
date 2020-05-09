import { FC, memo, useMemo } from 'react';
import MarkdowIt from 'markdown-it';
// markdown-body
import 'github-markdown-css';

const md = new MarkdowIt({
  html: true,
  linkify: true,
});

const baseToUtf = (str: any) => {
  // 处理中文乱码
  return decodeURIComponent(escape(atob(str)));
};

interface P {
  content: any;
  isBase64: any;
}

const Markdown: FC<P> = memo(({ content, isBase64 }) => {
  content = content || '';
  const markdown = isBase64 ? baseToUtf(content) : content;
  const html = useMemo(() => md.render(markdown), [markdown]);
  return (
    <div className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
});

export default Markdown;
