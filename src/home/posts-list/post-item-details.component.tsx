import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton } from '@/components/icon-button.component';
import { Text } from '@/components/text.component';

import { IPost } from './model';

interface Props {
  post: IPost;
  onRequestClose(): void;
}

export const PostItemDetails: React.FC<Props> = ({ post, onRequestClose }) => (
  <View style={styles.container}>
    <IconButton
      style={styles.closeButton}
      icon='close'
      onPress={() => onRequestClose()}
    />
    <Text
      style={styles.text}
      category='heading'>
      {post.title}
    </Text>
    <Text style={[styles.text, styles.body]}>
      {post.body}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  text: {
    color: 'white',
  },
  body: {
    marginTop: 12,
  },
});
