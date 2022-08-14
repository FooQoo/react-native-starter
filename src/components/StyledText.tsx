import { Text } from 'native-base';
import { TextProps } from 'src/components/Themed';

export const MonoText: React.FC<TextProps> = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
};
