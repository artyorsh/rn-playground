import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';

import { Button } from '../../../../components/button.component';
import { Divider } from '../../../../components/divider.component';
import { Text } from '../../../../components/text.component';

export type IFAQSectionId = '@product-details/faq';

interface Props extends ViewProps {
  vm: IFAQVM;
}

export interface IFAQQuestion {
  title: string;
  viewAnswer(): void;
}

export interface IFAQVM {
  questions: IFAQQuestion[];
  viewMore(): void;
}

export const FAQ: React.FC<Props> = ({ vm, ...props }) => {

  const renderQuestion = React.useCallback((question: IFAQQuestion, index: number) => (
    <TouchableOpacity
      testID='@faq/question'
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
  ), []);

  return (
    <View
      {...props}
      style={[styles.container, props.style]}>
      {vm.questions.map(renderQuestion)}
      <Button
        testID='@faq/view-more'
        style={styles.viewMoreButton}
        title='View More'
        onPress={vm.viewMore}
      />
    </View>
  );
};

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
