import React, { useState } from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { TagSection } from './Money/TagSection';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction:column;
`;

type Category = '-' | '+';

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  type Selected = typeof selected;
  // Partial<Selected>  部分的 Selected 属性，可能含有 一个 两个、 多个
  const onChange = (obj: Partial<Selected>) => {
    setSelected({ ...selected, ...obj });
  };
  return (
    <MyLayout>
      <TagSection value={selected.tagIds}
        onChange={tagIds => onChange({ tagIds })} />
      <NoteSection value={selected.note}
        onChange={note => onChange({ note })} />
      <CategorySection value={selected.category}
        onChange={category => onChange({ category })} />
      <NumberPadSection value={selected.amount}
        onChange={amount => onChange({ amount })}
        onOk={() => { }}
      />
    </MyLayout>
  );
}

export default Money;