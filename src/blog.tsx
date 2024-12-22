import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
      MathJax: any;
    }
  }
  
  interface MathComponentProps {
    tex: string;
  }
  
  const MathComponent: React.FC<MathComponentProps> = ({ tex }) => {
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!ref.current) return;
  
      const mathJax = window.MathJax;
      if (mathJax) {
        mathJax.Hub.Queue(['Typeset', mathJax.Hub, ref.current]);
      }
    }, [tex]);
  
    return <div ref={ref}>{`\\[${tex}\\]`}</div>;
  };



function Blog() {
    // const blogPosts = [];
    
    return (
        <div>
          {/* <MathComponent tex="\\int_0^1 x^2 dx" /> */}
        </div>
    )
}

export default Blog;