import WebView from "react-native-webview";

export type Props = {
  url: string;
};

const WebComponent: React.FC<Props> = ({ url }) => {
  return <WebView style={{ flex: 1 }} source={{ uri: url }} />;
};

export default WebComponent;
