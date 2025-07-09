import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/button.component';
import { IconButton } from '@/components/icon-button.component';
import { Text } from '@/components/text.component';

import { IPost } from '../posts-list/model';

interface Props {
  post: IPost;
  markHidden(): void;
  close(): void;
}

export const PostDetails: React.FC<Props> = ({ post, markHidden, close: onRequestClose }) => (
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
    <Button
      style={styles.removeButton}
      title='Remove from Feed'
      onPress={() => markHidden()}
    />
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
  removeButton: {
    marginTop: 24,
  },
  text: {
    color: 'white',
  },
  body: {
    marginTop: 12,
  },
});
