### ChangeLog

# v5.1.0

- feat: add new version of `FTabs`, with `FTabsController`, `FTabsHeader`, `FTabsPanel`.

- fix:

  - color issue of `FButton`,
  - props of `FDoubleTabs` and `FDoubleTabsPanel`,
  - close icon of `FRWDNavBar`.

# v5.0.0

- BREAKING CHANGE: change the github organisation name to `innoplus-studio`.

- feat: add properties for custom menu icon and close icon of `FRWDNavBar`:

  - `topBarCustomMenuIconProps` and `topBarCustomCloseIconProps`.

# v4.1.12

- modified `FRWDNavBar` fields:

  - renamed `topBarActionComponents` to `topBarCustomMenuIcon`.
  - added `topBarCustomCloseIcon`.

# v4.1.11

- modified `FRWDNavBar`: _onClick_ for `topBarActionComponents`.

# v4.1.10

- added _onBlur_ field in `FSearchBar`.

# v4.1.9

- added _onClick_ field in `FSearchBar`.

# v4.1.4 - v4.1.8

- modified _state_ in `FSearchBar`.

# v4.1.3

- removed _index_ field from `FOnHoverProperty`.

- modified _weekday_ in `FReturnDate`.

- modified components: `FButton`, `FLinkButton`, `FDnDItem` and `FSearchBar`.

# v4.1.1 - v4.1.2

- added `FRemoveTypeName` function.

- modified _types_ of `FDoubleTabsPanel`and `FTabsPanel` components:

  - `label` changed to _optional_ field

- modified `FReturnRWDMode`.

# v4.1.0

- added `FNumberInputField`.

- pause to update _storybook_.

# v4.0.1

- fixed _hover_ effect issues on `labelProps` of `FButton` and `FSelect`.

# v4.0.0

- deprecated `FMoreActionPopUp`

- added components:

  - `FScrollableContainer`
  - `FDoubleTabsPanel` (_separate from `FDoubleTabs`_)
  - `FTabsPanel` (_separate from `FTabs`_)

- renamed components:

  - `FDnDOrder` --> `FDragAndDrop`
  - `FCreateSelect` --> `FInputSelect`

- renamed utils functions:

  - `FCheckIsDarkMode` --> `FCheckIsDarkThemeMode`
  - `FFirstLetterUppercase` --> `FFirstCharUppercase`
  - `FAutoConvertArray` --> `FReturnArray`
  - `FUseColor` --> `FReturnColor`
  - `FDateTimer` --> `FReturnDate`
  - `FRwdModeHandler` --> `FReturnRWDMode`
  - `FUseScreenSize` --> `FReturnScreenSize`
  - `FSingleDigitConverter` --> `FSingleToDoubleDigit`

- changed `FRWDMode.FULL` to `FRWDMode.PC`

- added types in _global.types.ts_:

  - `NumericStringType`
  - `FOnHoverProperty`
  - `FComponentType`
  - `FComponentsType`

- modified components params so may need to change the current props:

  - added _hover_ param in style and className in some components, e.g. `FText`
  - removed _\*style_ and _\*className_ in some components,
    use `style` and `className` in _\*props_ instead

- will add `FNumberInputField` in later version
