import WebView from "react-native-webview";
import { Mixins } from "_styles";

export type Props = {
  url: string;
};

const WebComponent: React.FC<Props> = ({ url }) => {
  return (
    <WebView
      style={{ marginTop: Mixins.WINDOW_HEIGHT * 0.1, borderRadius: 16 }}
      source={{ uri: url }}
    />
  );
};

export default WebComponent;
