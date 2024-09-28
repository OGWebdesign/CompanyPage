import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeSnippet = ({ code }: any) => {
    return (
/* box-shadow: 0 20px 50px rgba(8, 112, 184, 0.7); */
        <SyntaxHighlighter customStyle={{
            backgroundColor: '#000',
            borderRadius: '8px',
            fontSize: '0.1rem',
          }} language='typescript' style={vscDarkPlus}>
            {code}
        </SyntaxHighlighter>

    );
}