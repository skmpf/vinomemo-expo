import { ScrollView, View } from "react-native";
import { Card, Text, useTheme } from "@rneui/themed";
import { INote } from "@/modules/note";
import { theme as custom } from "@/constants/theme";

export const Summary = ({ note }: { note: INote | undefined }) => {
  const { theme } = useTheme();

  const SummaryCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => {
    return (
      <Card
        containerStyle={{
          borderRadius: 5,
          width: "95%",
        }}
      >
        <Card.Title
          style={{ textTransform: "uppercase", color: theme.colors.primary }}
        >
          {title}
        </Card.Title>
        <View>{children}</View>
      </Card>
    );
  };

  const SummaryItem = ({
    label,
    data,
    isLast = false,
  }: {
    label: string;
    data: string | number | undefined;
    isLast?: boolean;
  }) => {
    return (
      <View>
        <Text
          style={{
            fontFamily: custom.fonts.primaryBold,
            color: theme.colors.primary,
            marginBottom: 5,
          }}
        >
          {label}
        </Text>
        <Text style={{ marginBottom: 5 }}>{data}</Text>
        {!isLast && <Card.Divider />}
      </View>
    );
  };

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
        <SummaryCard title="Information">
          <SummaryItem label="Name" data={note.information.name} />
          <SummaryItem label="Country" data={note.information.country} />
          <SummaryItem label="Region" data={note.information.region} />
          <SummaryItem label="Grapes" data={note.information.grapes} />
          <SummaryItem label="Producer" data={note.information.producer} />
          <SummaryItem label="Vintage" data={note.information.vintage} />
          <SummaryItem label="Alcohol" data={note.information.alcohol} isLast />
        </SummaryCard>
        <SummaryCard title="Appearance">
          <SummaryItem label="Intensity" data={note.appearance?.intensity} />
          <SummaryItem
            label="Color"
            data={`${note.appearance?.color}${
              note.appearance?.variant && `: ${note.appearance?.variant}`
            }`}
            isLast
          />
        </SummaryCard>
        <SummaryCard title="Nose">
          <SummaryItem label="Intensity" data={note.nose?.intensity} />
          <SummaryItem
            label="Aroma characteristics"
            data={note.nose?.aromas}
            isLast
          />
        </SummaryCard>
        <SummaryCard title="Palate">
          <SummaryItem label="Sweetnes" data={note.palate?.sweetness} />
          <SummaryItem label="Acidity" data={note.palate?.acidity} />
          <SummaryItem label="Tannin" data={note.palate?.tannin} />
          <SummaryItem label="Alcohol" data={note.palate?.alcohol} />
          <SummaryItem label="Body" data={note.palate?.body} />
          <SummaryItem label="Flavor intensity" data={note.palate?.intensity} />
          <SummaryItem
            label="Flavor characteristics"
            data={note.palate?.flavors}
          />
          <SummaryItem label="Finish" data={note.palate?.finish} isLast />
        </SummaryCard>
        <SummaryCard title="Conclusions">
          <SummaryItem label="Quality" data={note.conclusions?.quality} />
          <SummaryItem label="Comments" data={note.conclusions?.comments} />
        </SummaryCard>
      </View>
    </ScrollView>
  );
};
