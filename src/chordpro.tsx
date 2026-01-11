import '@logseq/libs'
import React, { useEffect } from 'react'

import ChordproJS from 'chordprojs'

function makeShiny(input: string): string {
  /* CHORDPRO CSS 
  Main CSS Classes
    .chord-line - Applied to chord lines (pre element)
    .lyric-line - Applied to lyric lines (pre element)
*/
  const preStyle = "background:none; padding: 0em 0em 0em 0em; margin: 0em 0 0em 0em;"
  const chordStyle = "color: #c678dd; font-wight: bold;"
  const lyricStyle = "color: #abb2bf;"
    //.lyric-line-only - Applied to lyric lines when chords are hidden
    //.comment - Applied to comment lines
    //.comment-italic - Applied to italic comment lines
    //.comment-box - Applied to boxed comment lines
    //.highlight - Applied to highlighted text
    //.section - Applied to all section containers
    //.section-label - Applied to section labels
    //.chorus - Applied to chorus containers
    //.verse - Applied to verse containers
    //.bridge - Applied to bridge sections
    //.tab - Applied to tab sections
    //.grid - Applied to grid sections
    //.abc - Applied to ABC notation sections
    //.ly - Applied to LilyPond notation sections
    //.svg - Applied to SVG content sections
    //.textblock - Applied to text block sections
    //.chorus-ref - Applied to chorus references
    //.chord-diagram - Applied to chord diagrams
    //.chord-name - Applied to chord names in diagrams
    //.chord-definition - Applied to chord definitions in diagrams
    //.page-break - Applied to page breaks
    //.physical-page-break - Applied to physical page breaks
    //.column-break - Applied to column breaks
    //.image - Applied to image containers
    const emptyLineStyle ="background:none; padding: 0em 0em 0em 0em; margin: 0em 0 0em 0em;";
    //.artist - Applied to artist information
    //.key - Applied to key information
  return input
    .replaceAll("<pre class=\"chord-line\">", "<pre class=\"chord-line\" style=\"" + preStyle + chordStyle + "\">")
    .replaceAll("<pre class=\"lyric-line\">", "<pre class=\"lyric-line\" style=\"" + preStyle + lyricStyle + "\">")
    //.lyric-line-only - Applied to lyric lines when chords are hidden
    //.comment - Applied to comment lines
    //.comment-italic - Applied to italic comment lines
    //.comment-box - Applied to boxed comment lines
    //.highlight - Applied to highlighted text
    //.section - Applied to all section containers
    //.section-label - Applied to section labels
    //.chorus - Applied to chorus containers
    //.verse - Applied to verse containers
    //.bridge - Applied to bridge sections
    //.tab - Applied to tab sections
    //.grid - Applied to grid sections
    //.abc - Applied to ABC notation sections
    //.ly - Applied to LilyPond notation sections
    //.svg - Applied to SVG content sections
    //.textblock - Applied to text block sections
    //.chorus-ref - Applied to chorus references
    //.chord-diagram - Applied to chord diagrams
    //.chord-name - Applied to chord names in diagrams
    //.chord-definition - Applied to chord definitions in diagrams
    //.page-break - Applied to page breaks
    //.physical-page-break - Applied to physical page breaks
    //.column-break - Applied to column breaks
    //.image - Applied to image containers
    .replaceAll("<div class=\"empty-line\">", "<div class=\"empty-line\" style=\"" + emptyLineStyle + "\">")
    //.artist - Applied to artist information
    //.key - Applied to key information
    //.replaceAll("</pre>", "</pre>\n")
    
}

export default function (props: { content: string }) {
  const chordpro = ChordproJS();
  const { content } = props
  const elRef = React.useRef<HTMLDivElement>(null)
  const _host = logseq.Experiments.ensureHostScope()

  useEffect(() => {
    const chordproParsed = makeShiny(chordpro.renderToHTML(content))
    elRef.current.innerHTML = chordproParsed
  }, [content])

  return (<div className={'fcp-chordpro-container'} ref={elRef}></div>)
}

