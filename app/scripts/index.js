import { render } from 'react-dom';
import routes from './routes';

main()
function main() {
  const node = document.getElementById('wrapper');
  render(routes, node);
}
