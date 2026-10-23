---
title: "Icons"
description: "Catalog of all 1512 Cyclone UI icon components, with import paths and the size, color, weight, and mirrored props."
documentType: reference
tags: [icons, phosphor, tamagui]
---

# Icons

The `@cyclone-ui/icons` package has one icon component for each icon in the [Phosphor](https://phosphoricons.com) collection. Each icon is a [Tamagui](https://tamagui.dev) component. It works on web and on React Native.

Source: [`components/icons/src/icons`](../../../components/icons/src/icons). The files are generated. Do not edit them by hand. The generator reads the SVG assets from `@phosphor-icons/core` 2.1.1. See the [generator script](../../../components/icons/scripts/generate.ts).

## Import an icon

The public name of an icon is its component name. The name is the Phosphor icon name in PascalCase. Example: the Phosphor icon `arrow-right` is the component `ArrowRight`.

Import from the package root:

```tsx
import { Acorn, Heart } from "@cyclone-ui/icons";

<Acorn />
<Heart weight="fill" color="red" size={32} />
```

Import one icon module. This keeps the import small:

```tsx
import { ArrowRight } from "@cyclone-ui/icons/icons/ArrowRight";

<ArrowRight weight="bold" size={20} mirrored />
```

Package exports (from `components/icons/package.json`):

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/icons` | Every icon, `allIcons`, `createIcon`, `resolveIconSize`, and the types. |
| `@cyclone-ui/icons/icons/<Name>` | One icon, for example `@cyclone-ui/icons/icons/Acorn`. |
| `@cyclone-ui/icons/all` | The `allIcons` object. It maps each component name to its component. |
| `@cyclone-ui/icons/create-icon` | `createIcon` and `resolveIconSize`. |
| `@cyclone-ui/icons/types` | `ICON_WEIGHTS` and the TypeScript types. |

## Props

Every icon takes the props of a Tamagui icon (`size`, `color`, `style`, `disableTheme`, and the other `react-native-svg` props). It adds `weight` and `mirrored`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number`, a size token, a font size token, or a token variable | `24` | The width and height of the icon. |
| `color` | `string` | The theme `color` | The fill color of the icon. |
| `weight` | `"thin"`, `"light"`, `"regular"`, `"bold"`, `"fill"`, or `"duotone"` | `"regular"` | The style of the icon. |
| `mirrored` | `boolean` | `false` | Flips the icon horizontally, for right-to-left layouts. |

The `disableTheme` prop comes from `@tamagui/helpers-icon`. Its effect is not documented here.

Source: [`types.ts`](../../../components/icons/src/types.ts) and [`create-icon.tsx`](../../../components/icons/src/create-icon.tsx).

### Size

- A number is a size in pixels. The icon is square. Its `viewBox` is `0 0 256 256`.
- A string is read as a [size token](../tokens/sizes.md) first. Example: `size="4xl"` is the `4xl` size, 20px. A `$` prefix on the name is ignored.
- If the string is not a size token, the icon treats it as a font size token. The icon then matches text of that size.
- `resolveIconSize` applies the same rules.

```tsx
<Heart size={32} />
<Heart size="4xl" />
```

### Color

- `color` sets the SVG `fill`. Phosphor icons use fills, so `strokeWidth` has no effect.
- A string can be a theme key, a [color token](../tokens/semantic-colors.md), or a literal color such as `"red"` or `"#1fb2a6"`.
- With no `color`, the icon uses the theme `color`. If the theme has none, it uses `#000`.
- The color changes with a 200ms transition on web.

```tsx
<Heart color="red" />
<Heart weight="fill" color="#1fb2a6" />
```

### Weight

`ICON_WEIGHTS` lists the weights: `thin`, `light`, `regular`, `bold`, `fill`, `duotone`. Each icon file holds one SVG for each weight. If a weight is missing, the icon uses `regular`.

### Accessibility

The source does not add an accessible name to an icon. It does not hide an icon from assistive technology. The icon accepts `react-native-svg` props. This page does not document which of them reach the web output.

## Browse the icons in Storybook

The `Display/Icons` story has a `Gallery` view. It shows a preview of every icon and a text filter. It also has stories for weights, colors, sizes, and `mirrored`. See [`Icons.stories.tsx`](../../../components/icons/src/Icons.stories.tsx).

## Catalog

The catalog has 1512 icons in 18 groups. The groups come from the Phosphor `figma_category` field. Each icon is in one group. Names are sorted A to Z in each group.

- [Arrows](#arrows) (121)
- [Brands](#brands) (74)
- [Commerce](#commerce) (176)
- [Communication](#communication) (75)
- [Design](#design) (133)
- [Education](#education) (19)
- [Games](#games) (73)
- [Health & Wellness](#health--wellness) (27)
- [Maps & Travel](#maps--travel) (99)
- [Math & Finance](#math--finance) (83)
- [Media](#media) (111)
- [Office & Editing](#office--editing) (131)
- [People](#people) (69)
- [Security & Warnings](#security--warnings) (45)
- [System & Devices](#system--devices) (157)
- [Technology & Development](#technology--development) (29)
- [Time](#time) (28)
- [Weather & Nature](#weather--nature) (62)

### Arrows

121 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `ArrowArcLeft` | `ArrowArcRight` | `ArrowBendDoubleUpLeft` | `ArrowBendDoubleUpRight` |
| `ArrowBendDownLeft` | `ArrowBendDownRight` | `ArrowBendLeftDown` | `ArrowBendLeftUp` |
| `ArrowBendRightDown` | `ArrowBendRightUp` | `ArrowBendUpLeft` | `ArrowBendUpRight` |
| `ArrowCircleDown` | `ArrowCircleDownLeft` | `ArrowCircleDownRight` | `ArrowCircleLeft` |
| `ArrowCircleRight` | `ArrowCircleUp` | `ArrowCircleUpLeft` | `ArrowCircleUpRight` |
| `ArrowClockwise` | `ArrowCounterClockwise` | `ArrowDown` | `ArrowDownLeft` |
| `ArrowDownRight` | `ArrowElbowDownLeft` | `ArrowElbowDownRight` | `ArrowElbowLeft` |
| `ArrowElbowLeftDown` | `ArrowElbowLeftUp` | `ArrowElbowRight` | `ArrowElbowRightDown` |
| `ArrowElbowRightUp` | `ArrowElbowUpLeft` | `ArrowElbowUpRight` | `ArrowFatDown` |
| `ArrowFatLeft` | `ArrowFatLineDown` | `ArrowFatLineLeft` | `ArrowFatLineRight` |
| `ArrowFatLinesDown` | `ArrowFatLinesLeft` | `ArrowFatLinesRight` | `ArrowFatLinesUp` |
| `ArrowFatLineUp` | `ArrowFatRight` | `ArrowFatUp` | `ArrowLeft` |
| `ArrowLineDown` | `ArrowLineDownLeft` | `ArrowLineDownRight` | `ArrowLineLeft` |
| `ArrowLineRight` | `ArrowLineUp` | `ArrowLineUpLeft` | `ArrowLineUpRight` |
| `ArrowRight` | `ArrowsClockwise` | `ArrowsCounterClockwise` | `ArrowsDownUp` |
| `ArrowsHorizontal` | `ArrowsIn` | `ArrowsInCardinal` | `ArrowsInLineHorizontal` |
| `ArrowsInLineVertical` | `ArrowsInSimple` | `ArrowsLeftRight` | `ArrowsMerge` |
| `ArrowsOut` | `ArrowsOutCardinal` | `ArrowsOutLineHorizontal` | `ArrowsOutLineVertical` |
| `ArrowsOutSimple` | `ArrowSquareDown` | `ArrowSquareDownLeft` | `ArrowSquareDownRight` |
| `ArrowSquareIn` | `ArrowSquareLeft` | `ArrowSquareOut` | `ArrowSquareRight` |
| `ArrowSquareUp` | `ArrowSquareUpLeft` | `ArrowSquareUpRight` | `ArrowsSplit` |
| `ArrowsVertical` | `ArrowUDownLeft` | `ArrowUDownRight` | `ArrowULeftDown` |
| `ArrowULeftUp` | `ArrowUp` | `ArrowUpLeft` | `ArrowUpRight` |
| `ArrowURightDown` | `ArrowURightUp` | `ArrowUUpLeft` | `ArrowUUpRight` |
| `CaretCircleDoubleDown` | `CaretCircleDoubleLeft` | `CaretCircleDoubleRight` | `CaretCircleDoubleUp` |
| `CaretCircleDown` | `CaretCircleLeft` | `CaretCircleRight` | `CaretCircleUp` |
| `CaretCircleUpDown` | `CaretDoubleDown` | `CaretDoubleLeft` | `CaretDoubleRight` |
| `CaretDoubleUp` | `CaretDown` | `CaretLeft` | `CaretLineDown` |
| `CaretLineLeft` | `CaretLineRight` | `CaretLineUp` | `CaretRight` |
| `CaretUp` | `CaretUpDown` | `Recycle` | `VectorThree` |
| `VectorTwo` |  |  |  |

### Brands

74 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `AmazonLogo` | `AndroidLogo` | `AngularLogo` | `AppleLogo` |
| `ApplePodcastsLogo` | `AppStoreLogo` | `BehanceLogo` | `CodaLogo` |
| `CodepenLogo` | `CodesandboxLogo` | `DevToLogo` | `DiscordLogo` |
| `DribbbleLogo` | `DropboxLogo` | `FacebookLogo` | `FediverseLogo` |
| `FigmaLogo` | `FramerLogo` | `GithubLogo` | `GitlabLogo` |
| `GitlabLogoSimple` | `GoodreadsLogo` | `GoogleChromeLogo` | `GoogleDriveLogo` |
| `GoogleLogo` | `GooglePhotosLogo` | `GooglePlayLogo` | `GooglePodcastsLogo` |
| `InstagramLogo` | `LastfmLogo` | `LinkedinLogo` | `LinktreeLogo` |
| `LinuxLogo` | `MastodonLogo` | `MediumLogo` | `MessengerLogo` |
| `MetaLogo` | `MicrosoftExcelLogo` | `MicrosoftOutlookLogo` | `MicrosoftPowerpointLogo` |
| `MicrosoftTeamsLogo` | `MicrosoftWordLogo` | `NotionLogo` | `NyTimesLogo` |
| `OpenAiLogo` | `PatreonLogo` | `PaypalLogo` | `PhosphorLogo` |
| `PinterestLogo` | `ReadCvLogo` | `RedditLogo` | `ReplitLogo` |
| `SketchLogo` | `SkypeLogo` | `SlackLogo` | `SnapchatLogo` |
| `SoundcloudLogo` | `SpotifyLogo` | `SquareLogo` | `StackOverflowLogo` |
| `SteamLogo` | `StripeLogo` | `TelegramLogo` | `ThreadsLogo` |
| `TidalLogo` | `TiktokLogo` | `TumblrLogo` | `TwitchLogo` |
| `TwitterLogo` | `WechatLogo` | `WhatsappLogo` | `WindowsLogo` |
| `XLogo` | `YoutubeLogo` |  |  |

### Commerce

176 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Armchair` | `Avocado` | `Axe` | `BabyCarriage` |
| `Backpack` | `Bag` | `BagSimple` | `Balloon` |
| `Barcode` | `Barn` | `BaseballCap` | `Basket` |
| `Bathtub` | `Beanie` | `BeerBottle` | `BeerStein` |
| `Belt` | `Binoculars` | `Boot` | `BowlFood` |
| `BowlSteam` | `Brandy` | `Bread` | `Bridge` |
| `Broom` | `Building` | `BuildingApartment` | `BuildingOffice` |
| `Buildings` | `Bulldozer` | `Cake` | `CallBell` |
| `CarBattery` | `Cardholder` | `Carrot` | `CashRegister` |
| `Chair` | `Champagne` | `Cheers` | `Cheese` |
| `ChefHat` | `Cherries` | `Cigarette` | `CigaretteSlash` |
| `City` | `CoatHanger` | `Coffee` | `CoffeeBean` |
| `Coin` | `Coins` | `CoinVertical` | `ContactlessPayment` |
| `Cookie` | `CookingPot` | `Couch` | `CowboyHat` |
| `Crane` | `CraneTower` | `CreditCard` | `CurrencyBtc` |
| `CurrencyCircleDollar` | `CurrencyCny` | `CurrencyDollar` | `CurrencyDollarSimple` |
| `CurrencyEth` | `CurrencyEur` | `CurrencyGbp` | `CurrencyInr` |
| `CurrencyJpy` | `CurrencyKrw` | `CurrencyKzt` | `CurrencyNgn` |
| `CurrencyRub` | `Desk` | `Door` | `DoorOpen` |
| `Dress` | `Dresser` | `Egg` | `EggCrack` |
| `Eyeglasses` | `Factory` | `Fan` | `Farm` |
| `ForkKnife` | `Garage` | `Gavel` | `Gift` |
| `Grains` | `GrainsSlash` | `HairDryer` | `Hamburger` |
| `Hammer` | `Handbag` | `HandbagSimple` | `HandCoins` |
| `HardHat` | `HighHeel` | `Hoodie` | `IceCream` |
| `Invoice` | `Jar` | `JarLabel` | `Knife` |
| `Ladder` | `LadderSimple` | `Lamp` | `LampPendant` |
| `Martini` | `Money` | `MoneyWavy` | `Needle` |
| `NuclearPlant` | `OfficeChair` | `Onigiri` | `Orange` |
| `OrangeSlice` | `Oven` | `Package` | `Pants` |
| `Pepper` | `PicnicTable` | `PiggyBank` | `PintGlass` |
| `Pipe` | `PipeWrench` | `PixLogo` | `Pizza` |
| `Popcorn` | `Popsicle` | `PottedPlant` | `Receipt` |
| `ReceiptX` | `Rug` | `Scales` | `Screwdriver` |
| `Seatbelt` | `ShirtFolded` | `ShoppingBag` | `ShoppingBagOpen` |
| `ShoppingCart` | `ShoppingCartSimple` | `Shovel` | `Shower` |
| `Sneaker` | `SneakerMove` | `Sock` | `SolarPanel` |
| `SolarRoof` | `Stairs` | `Stool` | `Storefront` |
| `Sunglasses` | `Tag` | `TagChevron` | `TagSimple` |
| `TeaBag` | `Ticket` | `TipJar` | `Tire` |
| `Toolbox` | `Tote` | `ToteSimple` | `Towel` |
| `Tractor` | `Trademark` | `TrademarkRegistered` | `TruckTrailer` |
| `TShirt` | `Wallet` | `Warehouse` | `WashingMachine` |
| `Windmill` | `Wine` | `Wrench` | `Yarn` |

### Communication

75 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `AddressBook` | `AddressBookTabs` | `Asterisk` | `AsteriskSimple` |
| `At` | `Broadcast` | `CellTower` | `Chat` |
| `ChatCentered` | `ChatCenteredDots` | `ChatCenteredSlash` | `ChatCenteredText` |
| `ChatCircle` | `ChatCircleDots` | `ChatCircleSlash` | `ChatCircleText` |
| `ChatDots` | `Chats` | `ChatsCircle` | `ChatSlash` |
| `ChatsTeardrop` | `ChatTeardrop` | `ChatTeardropDots` | `ChatTeardropSlash` |
| `ChatTeardropText` | `ChatText` | `Cross` | `Envelope` |
| `EnvelopeOpen` | `EnvelopeSimple` | `EnvelopeSimpleOpen` | `Export` |
| `Hash` | `HashStraight` | `LetterCircleH` | `LetterCircleP` |
| `LetterCircleV` | `Mailbox` | `MatrixLogo` | `Megaphone` |
| `MegaphoneSimple` | `Numpad` | `PaperPlane` | `PaperPlaneRight` |
| `PaperPlaneTilt` | `Peace` | `Phone` | `PhoneCall` |
| `PhoneDisconnect` | `PhoneIncoming` | `PhoneList` | `PhoneOutgoing` |
| `PhonePause` | `PhonePlus` | `PhoneSlash` | `PhoneTransfer` |
| `PhoneX` | `Quotes` | `Radio` | `Rss` |
| `RssSimple` | `Share` | `ShareFat` | `ShareNetwork` |
| `Signature` | `Star` | `StarAndCrescent` | `StarHalf` |
| `StarOfDavid` | `Sticker` | `ThumbsDown` | `ThumbsUp` |
| `Translate` | `Voicemail` | `YinYang` |  |

### Design

133 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `AlignBottom` | `AlignBottomSimple` | `AlignCenterHorizontal` | `AlignCenterHorizontalSimple` |
| `AlignCenterVertical` | `AlignCenterVerticalSimple` | `AlignLeft` | `AlignLeftSimple` |
| `AlignRight` | `AlignRightSimple` | `AlignTop` | `AlignTopSimple` |
| `Angle` | `BezierCurve` | `Blueprint` | `BoundingBox` |
| `Circle` | `CircleDashed` | `CircleHalf` | `CircleHalfTilt` |
| `CircleNotch` | `CirclesFour` | `CirclesThree` | `CirclesThreePlus` |
| `Columns` | `ColumnsPlusLeft` | `ColumnsPlusRight` | `CompassTool` |
| `Crop` | `Cube` | `CubeTransparent` | `Cylinder` |
| `DiamondsFour` | `DropHalf` | `DropHalfBottom` | `DropSlash` |
| `Eraser` | `Exclude` | `ExcludeSquare` | `Eye` |
| `EyeClosed` | `Eyedropper` | `EyedropperSample` | `EyeSlash` |
| `FlipHorizontal` | `FlipVertical` | `FlowArrow` | `GearFine` |
| `Gradient` | `GridFour` | `GridNine` | `Hexagon` |
| `Highlighter` | `HighlighterCircle` | `Intersect` | `IntersectSquare` |
| `IntersectThree` | `Lasso` | `Layout` | `LineSegment` |
| `LineSegments` | `LineVertical` | `MagicWand` | `MarkerCircle` |
| `Notches` | `Octagon` | `PaintBrush` | `PaintBrushBroad` |
| `PaintBrushHousehold` | `PaintBucket` | `PaintRoller` | `Palette` |
| `Parallelogram` | `Pen` | `Pencil` | `PencilCircle` |
| `PencilLine` | `PencilRuler` | `PencilSimple` | `PencilSimpleLine` |
| `PencilSimpleSlash` | `PencilSlash` | `PenNib` | `PenNibStraight` |
| `Pentagon` | `Pentagram` | `Perspective` | `Placeholder` |
| `Polygon` | `Rectangle` | `RectangleDashed` | `Resize` |
| `Rows` | `RowsPlusBottom` | `RowsPlusTop` | `Ruler` |
| `Scissors` | `Scribble` | `ScribbleLoop` | `Selection` |
| `SelectionAll` | `SelectionBackground` | `SelectionForeground` | `SelectionInverse` |
| `SelectionPlus` | `SelectionSlash` | `Shapes` | `Sidebar` |
| `SidebarSimple` | `Sphere` | `SplitHorizontal` | `SplitVertical` |
| `SprayBottle` | `Square` | `SquareHalf` | `SquareHalfBottom` |
| `SquaresFour` | `SquareSplitHorizontal` | `SquareSplitVertical` | `Stack` |
| `StackMinus` | `StackPlus` | `StackSimple` | `Stamp` |
| `Subtract` | `SubtractSquare` | `Swatches` | `TextAUnderline` |
| `Triangle` | `TriangleDashed` | `Unite` | `UniteSquare` |
| `Vignette` |  |  |  |

### Education

19 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Book` | `BookBookmark` | `Bookmark` | `Bookmarks` |
| `BookmarkSimple` | `BookmarksSimple` | `BookOpen` | `BookOpenText` |
| `BookOpenUser` | `Books` | `Certificate` | `Chalkboard` |
| `ChalkboardSimple` | `ChalkboardTeacher` | `Exam` | `GraduationCap` |
| `Lectern` | `Student` | `Video` |  |

### Games

73 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Alien` | `Baseball` | `BaseballHelmet` | `Basketball` |
| `BeachBall` | `Bomb` | `Boules` | `BowlingBall` |
| `BoxingGlove` | `CastleTurret` | `Checkerboard` | `Club` |
| `Confetti` | `CourtBasketball` | `Cricket` | `Crown` |
| `CrownCross` | `CrownSimple` | `CubeFocus` | `Diamond` |
| `DiceFive` | `DiceFour` | `DiceOne` | `DiceSix` |
| `DiceThree` | `DiceTwo` | `DiscoBall` | `Drone` |
| `FinnTheHuman` | `FlyingSaucer` | `Football` | `FootballHelmet` |
| `GameController` | `Ghost` | `Golf` | `GoogleCardboardLogo` |
| `Heart` | `HeartBreak` | `HeartHalf` | `HeartStraight` |
| `HeartStraightBreak` | `Hockey` | `Horse` | `Joystick` |
| `Lego` | `LegoSmiley` | `MaskHappy` | `MaskSad` |
| `Medal` | `MedalMilitary` | `Parachute` | `PersonSimpleSki` |
| `PersonSimpleSnowboard` | `PingPong` | `Pinwheel` | `PokerChip` |
| `PuzzlePiece` | `Racquet` | `Ranking` | `Scroll` |
| `Skull` | `SoccerBall` | `Spade` | `Spiral` |
| `Strategy` | `Sword` | `Target` | `TennisBall` |
| `TreasureChest` | `TreePalm` | `Trophy` | `VirtualReality` |
| `Volleyball` |  |  |  |

### Health & Wellness

27 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Ambulance` | `Asclepius` | `Bandaids` | `Barbell` |
| `Bed` | `Brain` | `Dna` | `FaceMask` |
| `FireTruck` | `FirstAid` | `FirstAidKit` | `Flask` |
| `HandHeart` | `HandSoap` | `Heartbeat` | `Lifebuoy` |
| `Microscope` | `Pill` | `Prescription` | `Pulse` |
| `Stethoscope` | `Syringe` | `TestTube` | `Toilet` |
| `ToiletPaper` | `Tooth` | `Virus` |  |

### Maps & Travel

99 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Airplane` | `AirplaneInFlight` | `AirplaneLanding` | `AirplaneTakeoff` |
| `AirplaneTaxiing` | `AirplaneTilt` | `AirTrafficControl` | `Anchor` |
| `AnchorSimple` | `Barricade` | `Bicycle` | `Boat` |
| `Bus` | `CableCar` | `Car` | `CarProfile` |
| `CarSimple` | `ChargingStation` | `Church` | `Compass` |
| `CompassRose` | `Crosshair` | `CrosshairSimple` | `Elevator` |
| `Engine` | `EscalatorDown` | `EscalatorUp` | `Flag` |
| `FlagBanner` | `FlagBannerFold` | `FlagCheckered` | `FlagPennant` |
| `GasCan` | `GasPump` | `Globe` | `GlobeHemisphereEast` |
| `GlobeHemisphereWest` | `GlobeSimple` | `GlobeSimpleX` | `GlobeStand` |
| `GlobeX` | `Goggles` | `Gps` | `GpsFix` |
| `GpsSlash` | `Headlights` | `Hospital` | `House` |
| `HouseLine` | `HouseSimple` | `Jeep` | `Lighthouse` |
| `Lockers` | `MapPin` | `MapPinArea` | `MapPinLine` |
| `MapPinPlus` | `MapPinSimple` | `MapPinSimpleArea` | `MapPinSimpleLine` |
| `MapTrifold` | `Moped` | `MopedFront` | `Mosque` |
| `Motorcycle` | `NavigationArrow` | `Park` | `Path` |
| `PoliceCar` | `RoadHorizon` | `Rocket` | `RocketLaunch` |
| `Sailboat` | `Scooter` | `Seat` | `ShippingContainer` |
| `Signpost` | `SteeringWheel` | `Steps` | `Subway` |
| `Suitcase` | `SuitcaseRolling` | `SuitcaseSimple` | `SwimmingPool` |
| `Synagogue` | `Taxi` | `Tent` | `Tipi` |
| `TrafficCone` | `TrafficSign` | `TrafficSignal` | `Train` |
| `TrainRegional` | `TrainSimple` | `Tram` | `Trolley` |
| `TrolleySuitcase` | `Truck` | `Van` |  |

### Math & Finance

83 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `ApproximateEquals` | `Bank` | `Calculator` | `ChartBar` |
| `ChartBarHorizontal` | `ChartDonut` | `ChartLine` | `ChartLineDown` |
| `ChartLineUp` | `ChartPie` | `ChartPieSlice` | `ChartPolar` |
| `ChartScatter` | `Divide` | `Empty` | `Equals` |
| `Function` | `Graph` | `GreaterThan` | `GreaterThanOrEqual` |
| `Infinity` | `Intersection` | `LessThan` | `LessThanOrEqual` |
| `MathOperations` | `MemberOf` | `Minus` | `MinusCircle` |
| `MinusSquare` | `NotEquals` | `NotMemberOf` | `NotSubsetOf` |
| `NotSupersetOf` | `NumberCircleEight` | `NumberCircleFive` | `NumberCircleFour` |
| `NumberCircleNine` | `NumberCircleOne` | `NumberCircleSeven` | `NumberCircleSix` |
| `NumberCircleThree` | `NumberCircleTwo` | `NumberCircleZero` | `NumberEight` |
| `NumberFive` | `NumberFour` | `NumberNine` | `NumberOne` |
| `NumberSeven` | `NumberSix` | `NumberSquareEight` | `NumberSquareFive` |
| `NumberSquareFour` | `NumberSquareNine` | `NumberSquareOne` | `NumberSquareSeven` |
| `NumberSquareSix` | `NumberSquareThree` | `NumberSquareTwo` | `NumberSquareZero` |
| `NumberThree` | `NumberTwo` | `NumberZero` | `Percent` |
| `Pi` | `Plus` | `PlusCircle` | `PlusMinus` |
| `PlusSquare` | `Radical` | `Sigma` | `SubsetOf` |
| `SubsetProperOf` | `SupersetOf` | `SupersetProperOf` | `Table` |
| `Tilde` | `TrendDown` | `TrendUp` | `Union` |
| `X` | `XCircle` | `XSquare` |  |

### Media

111 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Airplay` | `Aperture` | `Article` | `ArticleMedium` |
| `ArticleNyTimes` | `Camera` | `CameraPlus` | `CameraRotate` |
| `CameraSlash` | `CassetteTape` | `ClosedCaptioning` | `Copyleft` |
| `Copyright` | `CornersIn` | `CornersOut` | `Disc` |
| `Ear` | `EarSlash` | `Eject` | `EjectSimple` |
| `Equalizer` | `Faders` | `FadersHorizontal` | `FastForward` |
| `FastForwardCircle` | `FilmReel` | `FilmScript` | `FilmSlate` |
| `FilmStrip` | `FourK` | `FrameCorners` | `Gif` |
| `Guitar` | `Headphones` | `Headset` | `HighDefinition` |
| `Image` | `ImageBroken` | `Images` | `ImageSquare` |
| `ImagesSquare` | `Metronome` | `Microphone` | `MicrophoneSlash` |
| `MicrophoneStage` | `MusicNote` | `MusicNotes` | `MusicNoteSimple` |
| `MusicNotesMinus` | `MusicNotesPlus` | `MusicNotesSimple` | `Newspaper` |
| `NewspaperClipping` | `Panorama` | `Pause` | `PauseCircle` |
| `PianoKeys` | `PictureInPicture` | `Play` | `PlayCircle` |
| `Playlist` | `PlayPause` | `Queue` | `Record` |
| `Repeat` | `RepeatOnce` | `Rewind` | `RewindCircle` |
| `Screencast` | `Shuffle` | `ShuffleAngular` | `ShuffleSimple` |
| `SkipBack` | `SkipBackCircle` | `SkipForward` | `SkipForwardCircle` |
| `Sliders` | `SlidersHorizontal` | `Slideshow` | `SpeakerHifi` |
| `SpeakerHigh` | `SpeakerLow` | `SpeakerNone` | `SpeakerSimpleHigh` |
| `SpeakerSimpleLow` | `SpeakerSimpleNone` | `SpeakerSimpleSlash` | `SpeakerSimpleX` |
| `SpeakerSlash` | `SpeakerX` | `StandardDefinition` | `Stop` |
| `StopCircle` | `Subtitles` | `SubtitlesSlash` | `Television` |
| `TelevisionSimple` | `ThreeD` | `VideoCamera` | `VideoCameraSlash` |
| `VideoConference` | `VinylRecord` | `Visor` | `Waveform` |
| `WaveformSlash` | `WaveSawtooth` | `WaveSine` | `WaveSquare` |
| `WaveTriangle` | `Webcam` | `WebcamSlash` |  |

### Office & Editing

131 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Archive` | `BoxArrowDown` | `BoxArrowUp` | `Briefcase` |
| `BriefcaseMetal` | `Cards` | `CardsThree` | `Clipboard` |
| `ClipboardText` | `Copy` | `CopySimple` | `CursorText` |
| `File` | `FileArchive` | `FileArrowDown` | `FileArrowUp` |
| `FileAudio` | `FileC` | `FileCloud` | `FileCode` |
| `FileCpp` | `FileCSharp` | `FileCss` | `FileCsv` |
| `FileDashed` | `FileDoc` | `FileHtml` | `FileImage` |
| `FileIni` | `FileJpg` | `FileJs` | `FileJsx` |
| `FileLock` | `FileMagnifyingGlass` | `FileMd` | `FileMinus` |
| `FilePdf` | `FilePlus` | `FilePng` | `FilePpt` |
| `FilePy` | `FileRs` | `Files` | `FileSql` |
| `FileSvg` | `FileText` | `FileTs` | `FileTsx` |
| `FileTxt` | `FileVideo` | `FileVue` | `FileX` |
| `FileXls` | `FileZip` | `FloppyDisk` | `FloppyDiskBack` |
| `Folder` | `FolderDashed` | `FolderLock` | `FolderMinus` |
| `FolderOpen` | `FolderPlus` | `Folders` | `FolderSimple` |
| `FolderSimpleDashed` | `FolderSimpleLock` | `FolderSimpleMinus` | `FolderSimplePlus` |
| `FolderSimpleStar` | `FolderSimpleUser` | `FolderStar` | `FolderUser` |
| `Funnel` | `FunnelSimple` | `FunnelSimpleX` | `FunnelX` |
| `Kanban` | `List` | `ListBullets` | `ListChecks` |
| `ListDashes` | `ListNumbers` | `ListPlus` | `Note` |
| `NoteBlank` | `Notebook` | `Notepad` | `NotePencil` |
| `Paperclip` | `PaperclipHorizontal` | `Paragraph` | `Presentation` |
| `PresentationChart` | `Printer` | `ProjectorScreen` | `ProjectorScreenChart` |
| `PushPin` | `PushPinSimple` | `PushPinSimpleSlash` | `PushPinSlash` |
| `SortAscending` | `SortDescending` | `TextAa` | `TextAlignCenter` |
| `TextAlignJustify` | `TextAlignLeft` | `TextAlignRight` | `TextB` |
| `Textbox` | `TextColumns` | `TextH` | `TextHFive` |
| `TextHFour` | `TextHOne` | `TextHSix` | `TextHThree` |
| `TextHTwo` | `TextIndent` | `TextItalic` | `TextOutdent` |
| `TextStrikethrough` | `TextSubscript` | `TextSuperscript` | `TextT` |
| `TextTSlash` | `TextUnderline` | `Trash` | `TrashSimple` |
| `Tray` | `TrayArrowDown` | `TrayArrowUp` |  |

### People

69 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Baby` | `Eyes` | `Footprints` | `GenderFemale` |
| `GenderIntersex` | `GenderMale` | `GenderNeuter` | `GenderNonbinary` |
| `GenderTransgender` | `Hand` | `HandArrowDown` | `HandArrowUp` |
| `HandDeposit` | `HandEye` | `HandFist` | `HandGrabbing` |
| `HandPalm` | `HandPeace` | `HandPointing` | `HandsClapping` |
| `Handshake` | `HandsPraying` | `HandWaving` | `HandWithdraw` |
| `IdentificationBadge` | `IdentificationCard` | `Person` | `PersonArmsSpread` |
| `PersonSimple` | `PersonSimpleBike` | `PersonSimpleCircle` | `PersonSimpleHike` |
| `PersonSimpleRun` | `PersonSimpleSwim` | `PersonSimpleTaiChi` | `PersonSimpleThrow` |
| `PersonSimpleWalk` | `Smiley` | `SmileyAngry` | `SmileyBlank` |
| `SmileyMeh` | `SmileyMelting` | `SmileyNervous` | `SmileySad` |
| `SmileySticker` | `SmileyWink` | `SmileyXEyes` | `User` |
| `UserCheck` | `UserCircle` | `UserCircleCheck` | `UserCircleDashed` |
| `UserCircleGear` | `UserCircleMinus` | `UserCirclePlus` | `UserFocus` |
| `UserGear` | `UserList` | `UserMinus` | `UserPlus` |
| `UserRectangle` | `Users` | `UsersFour` | `UserSound` |
| `UserSquare` | `UsersThree` | `UserSwitch` | `Wheelchair` |
| `WheelchairMotion` |  |  |  |

### Security & Warnings

45 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Biohazard` | `Detective` | `ExclamationMark` | `FalloutShelter` |
| `Fingerprint` | `FingerprintSimple` | `FireExtinguisher` | `Info` |
| `Key` | `Keyhole` | `Lock` | `LockKey` |
| `LockKeyOpen` | `LockLaminated` | `LockLaminatedOpen` | `LockOpen` |
| `LockSimple` | `LockSimpleOpen` | `Password` | `Prohibit` |
| `ProhibitInset` | `Question` | `QuestionMark` | `Radioactive` |
| `Seal` | `SealCheck` | `SealPercent` | `SealQuestion` |
| `SealWarning` | `SecurityCamera` | `Shield` | `ShieldCheck` |
| `ShieldCheckered` | `ShieldChevron` | `ShieldPlus` | `ShieldSlash` |
| `ShieldStar` | `ShieldWarning` | `Siren` | `Vault` |
| `Wall` | `Warning` | `WarningCircle` | `WarningDiamond` |
| `WarningOctagon` |  |  |  |

### System & Devices

157 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `AppWindow` | `Backspace` | `BatteryCharging` | `BatteryChargingVertical` |
| `BatteryEmpty` | `BatteryFull` | `BatteryHigh` | `BatteryLow` |
| `BatteryMedium` | `BatteryPlus` | `BatteryPlusVertical` | `BatteryVerticalEmpty` |
| `BatteryVerticalFull` | `BatteryVerticalHigh` | `BatteryVerticalLow` | `BatteryVerticalMedium` |
| `BatteryWarning` | `BatteryWarningVertical` | `Bell` | `BellRinging` |
| `BellSimple` | `BellSimpleRinging` | `BellSimpleSlash` | `BellSimpleZ` |
| `BellSlash` | `BellZ` | `Bluetooth` | `BluetoothConnected` |
| `BluetoothSlash` | `BluetoothX` | `Browser` | `Browsers` |
| `CellSignalFull` | `CellSignalHigh` | `CellSignalLow` | `CellSignalMedium` |
| `CellSignalNone` | `CellSignalSlash` | `CellSignalX` | `Check` |
| `CheckCircle` | `CheckFat` | `Checks` | `CheckSquare` |
| `CheckSquareOffset` | `Circuitry` | `CloudArrowDown` | `CloudArrowUp` |
| `CloudCheck` | `CloudSlash` | `CloudWarning` | `CloudX` |
| `Command` | `ComputerTower` | `Control` | `Cursor` |
| `CursorClick` | `Desktop` | `DesktopTower` | `DeviceMobile` |
| `DeviceMobileCamera` | `DeviceMobileSlash` | `DeviceMobileSpeaker` | `DeviceRotate` |
| `Devices` | `DeviceTablet` | `DeviceTabletCamera` | `DeviceTabletSpeaker` |
| `Dot` | `DotOutline` | `DotsNine` | `DotsSix` |
| `DotsSixVertical` | `DotsThree` | `DotsThreeCircle` | `DotsThreeCircleVertical` |
| `DotsThreeOutline` | `DotsThreeOutlineVertical` | `DotsThreeVertical` | `Download` |
| `DownloadSimple` | `Flashlight` | `Gauge` | `Gear` |
| `GearSix` | `HandSwipeLeft` | `HandSwipeRight` | `HandTap` |
| `HardDrive` | `HardDrives` | `Keyboard` | `KeyReturn` |
| `Laptop` | `Lightbulb` | `LightbulbFilament` | `Lightning` |
| `LightningA` | `LightningSlash` | `Link` | `LinkBreak` |
| `LinkSimple` | `LinkSimpleBreak` | `LinkSimpleHorizontal` | `LinkSimpleHorizontalBreak` |
| `ListHeart` | `ListMagnifyingGlass` | `ListStar` | `MagnifyingGlass` |
| `MagnifyingGlassMinus` | `MagnifyingGlassPlus` | `Memory` | `Monitor` |
| `MonitorArrowUp` | `MonitorPlay` | `Mouse` | `MouseLeftClick` |
| `MouseMiddleClick` | `MouseRightClick` | `MouseScroll` | `MouseSimple` |
| `Network` | `NetworkSlash` | `NetworkX` | `Notification` |
| `Nut` | `Option` | `Plug` | `PlugCharging` |
| `Plugs` | `PlugsConnected` | `Power` | `QrCode` |
| `RadioButton` | `Scan` | `ScanSmiley` | `SignIn` |
| `SignOut` | `SimCard` | `Speedometer` | `Spinner` |
| `SpinnerBall` | `SpinnerGap` | `Swap` | `Tabs` |
| `ToggleLeft` | `ToggleRight` | `TreeView` | `Upload` |
| `UploadSimple` | `Usb` | `Vibrate` | `WifiHigh` |
| `WifiLow` | `WifiMedium` | `WifiNone` | `WifiSlash` |
| `WifiX` |  |  |  |

### Technology & Development

29 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Binary` | `BracketsAngle` | `BracketsCurly` | `BracketsRound` |
| `BracketsSquare` | `Bug` | `BugBeetle` | `BugDroid` |
| `Code` | `CodeBlock` | `CodeSimple` | `Cpu` |
| `Database` | `GitBranch` | `GitCommit` | `GitDiff` |
| `GitFork` | `GitMerge` | `GitPullRequest` | `GraphicsCard` |
| `HeadCircuit` | `Magnet` | `MagnetStraight` | `MarkdownLogo` |
| `Robot` | `Terminal` | `TerminalWindow` | `TreeStructure` |
| `WebhooksLogo` |  |  |  |

### Time

28 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Alarm` | `Calendar` | `CalendarBlank` | `CalendarCheck` |
| `CalendarDot` | `CalendarDots` | `CalendarHeart` | `CalendarMinus` |
| `CalendarPlus` | `CalendarSlash` | `CalendarStar` | `CalendarX` |
| `Clock` | `ClockAfternoon` | `ClockClockwise` | `ClockCountdown` |
| `ClockCounterClockwise` | `ClockUser` | `Hourglass` | `HourglassHigh` |
| `HourglassLow` | `HourglassMedium` | `HourglassSimple` | `HourglassSimpleHigh` |
| `HourglassSimpleLow` | `HourglassSimpleMedium` | `Timer` | `Watch` |

### Weather & Nature

62 icons.

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| `Acorn` | `Atom` | `Bird` | `Bone` |
| `Butterfly` | `Cactus` | `Campfire` | `Cat` |
| `Cloud` | `CloudFog` | `CloudLightning` | `CloudMoon` |
| `CloudRain` | `CloudSnow` | `CloudSun` | `Clover` |
| `Cow` | `Dog` | `Drop` | `DropSimple` |
| `Feather` | `Fire` | `FireSimple` | `Fish` |
| `FishSimple` | `Flame` | `Flower` | `FlowerLotus` |
| `FlowerTulip` | `Hurricane` | `Island` | `Leaf` |
| `Log` | `Meteor` | `Moon` | `MoonStars` |
| `Mountains` | `PawPrint` | `Planet` | `Plant` |
| `Rabbit` | `Rainbow` | `RainbowCloud` | `ShootingStar` |
| `Shrimp` | `Snowflake` | `Sparkle` | `StarFour` |
| `Sun` | `SunDim` | `SunHorizon` | `Thermometer` |
| `ThermometerCold` | `ThermometerHot` | `ThermometerSimple` | `Tornado` |
| `Tree` | `TreeEvergreen` | `Umbrella` | `UmbrellaSimple` |
| `Waves` | `Wind` |  |  |

## Related pages

- [Design system overview](../index.md)
- [Color tokens](../tokens/semantic-colors.md)
- [Size tokens](../tokens/sizes.md)

## License

The icon artwork is © Phosphor Icons. It is licensed under the [MIT License](https://github.com/phosphor-icons/core/blob/main/LICENSE).
