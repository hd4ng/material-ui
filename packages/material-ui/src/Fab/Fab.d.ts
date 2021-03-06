import { OverridableStringUnion } from '@material-ui/types';
import { SxProps } from '@material-ui/system';
import { PropTypes, Theme } from '..';
import { ExtendButtonBase, ExtendButtonBaseTypeMap } from '../ButtonBase';
import { OverrideProps } from '../OverridableComponent';

export interface FabPropsVariantOverrides {}

export interface FabPropsSizeOverrides {}

export interface FabPropsColorOverrides {}

export type FabTypeMap<P = {}, D extends React.ElementType = 'button'> = ExtendButtonBaseTypeMap<{
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
      /** Styles applied to the span element that wraps the children. */
      label?: string;
      /** Styles applied to the root element if `color="primary"`. */
      primary?: string;
      /** Styles applied to the root element if `color="secondary"`. */
      secondary?: string;
      /** Styles applied to the root element if `variant="extended"`. */
      extended?: string;
      /** Styles applied to the root element if `variant="circular"`. */
      circular?: string;
      /** Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible?: string;
      /** Pseudo-class applied to the root element if `disabled={true}`. */
      disabled?: string;
      /** Styles applied to the root element if `color="inherit"`. */
      colorInherit?: string;
      /** Styles applied to the root element if `size="small"``. */
      sizeSmall?: string;
      /** Styles applied to the root element if `size="medium"``. */
      sizeMedium?: string;
    };
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'default'
     */
    color?: OverridableStringUnion<PropTypes.Color, FabPropsColorOverrides>;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * If `true`, the ripple effect is disabled.
     */
    disableRipple?: boolean;
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href?: string;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'large'
     */
    size?: OverridableStringUnion<'small' | 'medium' | 'large', FabPropsSizeOverrides>;
    /**
     * The variant to use.
     * @default 'circular'
     */
    variant?: OverridableStringUnion<'circular' | 'extended', FabPropsVariantOverrides>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}>;

/**
 *
 * Demos:
 *
 * - [Floating Action Button](https://material-ui.com/components/floating-action-button/)
 *
 * API:
 *
 * - [Fab API](https://material-ui.com/api/fab/)
 * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
 */
declare const Fab: ExtendButtonBase<FabTypeMap>;

export type FabProps<
  D extends React.ElementType = FabTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<FabTypeMap<P, D>, D>;

export type FabClassKey = keyof NonNullable<FabTypeMap['props']['classes']>;

export default Fab;
