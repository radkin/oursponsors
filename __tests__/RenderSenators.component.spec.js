import renderer from 'react-test-renderer';
import RenderSenators from '../src/components/RenderSenators';

describe('RenderSenators', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <RenderSenators/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
