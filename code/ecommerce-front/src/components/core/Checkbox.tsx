import React from 'react'
import { Typography, Checkbox as AntdCheckbox } from 'antd'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/actions/category.action';
import { AppState } from '../../store/reducers';
import { CategoryState } from '../../store/reducers/category.reducer';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const { Title } = Typography;

interface Props {
  handleFilter: (arg: string[]) => void
}

const Checkbox: React.FC<Props> = ({handleFilter}) => {
  const dispatch = useDispatch()
  const category = useSelector<AppState, CategoryState>(state => state.category)

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const onchange = (checkedValue: CheckboxValueType[]) => {
    handleFilter(checkedValue as string[])
  }

  return <>
    <Title level={4}>按照分类筛选</Title>
    <AntdCheckbox.Group
      className='checkBoxFilter'
      options={category.category.result.map(item => ({
        label: item.name,
        value: item._id
      }))}
      onChange={onchange}
    />
  </>
}

export default Checkbox