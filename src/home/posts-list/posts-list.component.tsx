import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

import { getBottomSpace } from '@/components/safe-area.component';

import { IPostVM, PostItem } from './post-item.component';

interface Props {
  vm: IPostsListVM;
}

export interface IPostsListVM {
  posts: IPostVM[];
}

export const PostsList: React.FC<Props> = observer(({ vm }) => {

  const renderItem = ({ item }: ListRenderItemInfo<IPostVM>): React.ReactElement => (
    <PostItem
      testID='post-item'
      style={styles.item}
      vm={item}
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={vm.posts}
      renderItem={renderItem}
    />
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace(16),
  },
  item: {
    marginTop: 16,
  },
});
