// Minimal rehype plugin to add target="_blank" and rel to external links
// Works for Markdown and MDX rendered content
export default function rehypeExternalLinks() {
  return function transformer(tree: any) {
    function visit(node: any) {
      if (node && typeof node === 'object') {
        if (node.type === 'element' && node.tagName === 'a') {
          const props = (node.properties = node.properties || {})
          const href = props.href as string | undefined
          if (href && /^https?:\/\//.test(href)) {
            if (!props.target) props.target = '_blank'
            const rel = new Set(String(props.rel || '').split(/\s+/).filter(Boolean))
            rel.add('noopener')
            rel.add('noreferrer')
            props.rel = Array.from(rel).join(' ')
          }
        }
        if (Array.isArray(node.children)) node.children.forEach(visit)
      }
    }
    visit(tree)
  }
}

