import { ScrollView, View } from "react-native";
import { Card, Text } from "@rneui/themed";
import { INote } from "@/modules/note";

export const Summary = ({ note }: { note: INote | undefined }) => {
  if (!note) return null;
  return (
    <ScrollView style={{ flex: 1, width: "100%" }}>
      <View
        style={{
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 12, color: "grey" }}>
          Added on {new Date(note.createdAt!).toLocaleString()}
        </Text>
        <Card
          containerStyle={{
            borderRadius: 5,
            width: "95%",
          }}
        >
          <Card.Title style={{ textTransform: "uppercase" }}>
            Information
          </Card.Title>
          <View>
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Name
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.information.name}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Country
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.information.country}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Region
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.information.region}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Grapes
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.information.grapes}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Producer
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.information.producer}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Vintage
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.information.vintage}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Alcohol
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.information.alcohol}
              </Text>
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            borderRadius: 5,
            width: "95%",
          }}
        >
          <Card.Title style={{ textTransform: "uppercase" }}>
            Appearance
          </Card.Title>
          <View>
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Intensity
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.appearance?.intensity}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Color
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.appearance?.color}
                {note.appearance?.variant && `: ${note.appearance?.variant}`}
              </Text>
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            borderRadius: 5,
            width: "95%",
          }}
        >
          <Card.Title style={{ textTransform: "uppercase" }}>Nose</Card.Title>
          <View>
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Intensity
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.nose?.intensity}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Aroma characteristics
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.nose?.aromas}
              </Text>
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            borderRadius: 5,
            width: "95%",
          }}
        >
          <Card.Title style={{ textTransform: "uppercase" }}>Palate</Card.Title>
          <View>
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Sweetnes
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.sweetness}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Acidity
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.acidity}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Tannin
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.tannin}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Alcohol
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.alcohol}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Body
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.body}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Flavor intensity
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.intensity}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Flavor characteristics
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.flavors}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Finish
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.palate?.finish}
              </Text>
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            borderRadius: 5,
            width: "95%",
          }}
        >
          <Card.Title style={{ textTransform: "uppercase" }}>
            Conclusions
          </Card.Title>
          <View>
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Quality
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.conclusions?.quality}
              </Text>
            </View>
            <Card.Divider />
            <View>
              <Text style={{ fontFamily: "Roboto_700Bold", marginBottom: 5 }}>
                Comments
              </Text>
              <Text style={{ color: "black", marginBottom: 5 }}>
                {note.conclusions?.comments}
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};
