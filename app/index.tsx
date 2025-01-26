import { View } from "react-native";
import { Button } from "tamagui";
import { Theme } from "@tamagui/core";

export default function Home() {
    return (
        <Theme name="light_active">
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Button color="green">Home</Button>
            </View>
        </Theme>
    );
}