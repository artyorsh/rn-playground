import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../components/text.component';
import { Divider } from '../../../../components/divider.component';
import { Button } from '../../../../components/button.component';

export type IFAQSectionId = '@product-details/faq';

export interface IFAQQuestion {
  title: string;
  viewAnswer(): void;
}

export interface IFAQVM {
  questions: IFAQQuestion[];
  viewMore(): void;
}

export const FAQ: React.FC<{ vm: IFAQVM }> = ({ vm }) => {

  const renderQuestion = React.useCallback((question: IFAQQuestion, index: number) => (
    <TouchableOpacity 
      activeOpacity={0.75}
      key={index}
      onPress={question.viewAnswer}>
      <Text 
        style={styles.questionTitle}
        category='subheading'>
        {question.title}
      </Text>
      <Divider />
    </TouchableOpacity>
  ), [])

  return (
    <View style={styles.container}>
      {vm.questions.map(renderQuestion)}
      <Button 
        style={styles.viewMoreButton}
        title='View More'
        onPress={vm.viewMore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  questionTitle: {
    marginVertical: 12,
  },
  viewMoreButton: {
    marginTop: 12,
  },
});