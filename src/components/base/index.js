export { default as AuthInput } from './AuthInput/AuthInput';
export { default as AuthLogos } from './AuthLogos/AuthLogos';
export { default as AuthSwitch } from './AuthSwitch/AuthSwitch';
export { default as Breadcrumb } from './Breadcrumb/Breadcrumb';
export { default as Button } from './Button/Button';
export { default as CategoryCard } from './CategoryCard/CategoryCard';
export { default as ColorPicker } from './ColorPicker/ColorPicker';
export { default as Container } from './Container/Container';
export { default as CountInput } from './CountInput/CountInput';
export { default as FooterMenu } from './FooterMenu/FooterMenu';
export { default as InputPicker } from './InputPicker/InputPicker';
export { default as ProductCard } from './ProductCard/ProductCard';
export { default as ProductCardLayout } from './ProductCardLayout/ProductCardLayout';
export { default as StarIcon } from './StarIcon/StarIcon';
export { default as InputGroup } from './InputGroup/InputGroup';
export { default as NotFound } from './NotFound/NotFound';

export const buttonItemRender = (current, type, element) => {
  if (type === 'prev') {
    return <button type="button" className="btn btn-sm btn-outline-orange" title="prev"></button>;
  }
  if (type === 'next') {
    return <button type="button" className="btn btn-sm btn-outline-orange" title="next"></button>;
  }
  return element;
};
