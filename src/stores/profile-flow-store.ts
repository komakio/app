import { observable } from 'mobx';
import { RootStore } from './root-store';
import { ProfilesApi } from '@api/profile';
import { Geolocation } from '@utils/geolocation';
import { i18n } from '@i18n/index';
import { Alert } from 'react-native';
import { NavigationProp, NavigationState } from '@react-navigation/native';

export class ProfileFlowStore {
  public rootStore: RootStore;

  @observable
  public role: 'helper' | 'needer';

  @observable
  public firstName = '';

  @observable
  public lastName = '';

  @observable
  public phone = '';

  @observable
  public dialCode = '-';

  @observable
  public address = '';

  @observable
  public addressExtra = '';

  @observable
  public policyTerms = false;

  @observable
  public serviceTerms = false;

  @observable
  public coords: [number, number];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  public async getGeolocation(
    navigation: NavigationProp<
      Record<string, object>,
      string,
      NavigationState,
      {},
      {}
    >
  ) {
    const t = i18n.getFixedT(i18n.language);
    try {
      const infos = await Geolocation.get(t);
      this.coords = [infos.coords.longitude, infos.coords.latitude];

      if (this.rootStore.userStore.profile?._id) {
        this.rootStore.userStore.patchProfile(
          this.rootStore.userStore.profile?._id,
          {
            address: {
              location: {
                type: 'Point',
                coordinates: this.coords,
              },
            },
          }
        );
        Alert.alert(t('PROFILE_VIEW_LOCATION_UPDATED'));
      }
    } catch (error) {
      Alert.alert(t('GEOLOCATION_ERROR_TITLE'), t(error), [
        { text: t('ACTIONS_CANCEL'), style: 'cancel' },
        {
          text: t('GEOLOCATION_CHOOSE_MANUAL'),
          onPress: () => {
            navigation.navigate('profile-infos-address', {
              latLongRequired: true,
            });
          },
        },
      ]);
    }
  }

  public async saveProfile() {
    try {
      const res = await ProfilesApi.createProfile(
        this.rootStore.userStore.accessToken.token,
        {
          firstName: this.firstName,
          lastName: this.lastName,
          role: this.role,
          self: true,
          phone: {
            number: this.phone,
          },
          address: {
            raw: this.address,
            location: {
              type: 'Point',
              coordinates: this.coords,
            },
          },
        }
      );
      this.rootStore.userStore.profiles.push(res);
      return res;
    } catch (e) {
      console.log(e.response);
      return false;
    }
  }

  public isValid() {
    if (
      !this.role ||
      !this.firstName ||
      !this.lastName ||
      !this.phone ||
      !this.dialCode ||
      !this.coords ||
      !this.serviceTerms ||
      !this.policyTerms
    ) {
      return false;
    }

    return true;
  }

  public reset() {
    this.role = null;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.dialCode = '-';
    this.address = '';
    this.serviceTerms = false;
    this.policyTerms = false;
    this.coords = null;
  }
}
