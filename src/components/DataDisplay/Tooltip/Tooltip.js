import React, { useState } from 'react';
import { TouchableOpacity, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../Text';
import PropTypes from 'prop-types';
import styles from './Tooltip.styles';
import { noop } from '../../../utils';

const IconWrapper = ({ icon: Icon, iconProps }) => <Icon width={16} height={16} {...iconProps} />;

export const Tooltip = ({ message, title, icon, iconProps, onOpenModal, onCloseModal }) => {
  const theme = useThemeContex();
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    onOpenModal();
    setVisible(true);
  };
  const closeModal = () => {
    onCloseModal();
    setVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={openModal}>
        <IconWrapper icon={icon} iconProps={iconProps} />
      </TouchableOpacity>
      <Modal
        transparent
        visible={visible}
        animationType="slide"
        onRequestClose={closeModal}
        supportedOrientations={['portrait', 'landscape']}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.containerModal} />
        </TouchableWithoutFeedback>
        <View style={[styles.popupContainerModal, { backgroundColor: theme.colors.white }]}>
          <Text.Subtitle1 style={[styles.title, { color : theme.colors.fontPrimaryDark }]}>{title}</Text.Subtitle1>
          <Text.Body2 style={[styles.message, { color : theme.colors.fontPrimaryDark }]}>{message}</Text.Body2>
        </View>
      </Modal>
    </>
  );
};

Tooltip.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  iconProps: PropTypes.shape({
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  onOpenModal: PropTypes.func, 
  onCloseModal: PropTypes.func
};

Tooltip.defaultProps = {
  iconProps: {},
  onOpenModal: noop,
  onCloseModal: noop
};

