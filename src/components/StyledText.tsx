import { Text } from 'native-base';
import { TextProps } from 'src/components/Themed';

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
