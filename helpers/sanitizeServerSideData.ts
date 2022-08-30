import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom';


export function sanitizeServerSideData(data: any) {
  const window = new JSDOM('').window;
  const purify = DOMPurify(window as unknown as Window);
  return purify.sanitize(data)
}