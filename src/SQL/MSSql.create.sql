



CREATE TABLE [Visit] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [StartVisitDate] DATETIME  NULL,

	 [EndVisitdate] DATETIME  NULL,

	 [Person_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Room_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Hotel] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Address] VARCHAR(255)  NULL,

	 [Manager_m0] UNIQUEIDENTIFIER  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [HotelEmployee] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [StartWorkDate] DATETIME  NULL,

	 [EndWorkDate] DATETIME  NULL,

	 [Employee_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Hotel_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Room] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Number] INT  NULL,

	 [Hotel_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Person] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [FullName] VARCHAR(255)  NULL,

	 [Sex] VARCHAR(6)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Employee] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [FirstName] VARCHAR(255)  NULL,

	 [LastName] VARCHAR(255)  NULL,

	 [MiddleName] VARCHAR(255)  NULL,

	 [Sex] VARCHAR(6)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [Visit] ADD CONSTRAINT [Visit_FPerson_0] FOREIGN KEY ([Person_m0]) REFERENCES [Person]
CREATE INDEX Visit_IPerson_m0 on [Visit] ([Person_m0])

 ALTER TABLE [Visit] ADD CONSTRAINT [Visit_FRoom_0] FOREIGN KEY ([Room_m0]) REFERENCES [Room]
CREATE INDEX Visit_IRoom_m0 on [Visit] ([Room_m0])

 ALTER TABLE [Hotel] ADD CONSTRAINT [Hotel_FEmployee_0] FOREIGN KEY ([Manager_m0]) REFERENCES [Employee]
CREATE INDEX Hotel_IManager_m0 on [Hotel] ([Manager_m0])

 ALTER TABLE [HotelEmployee] ADD CONSTRAINT [HotelEmployee_FEmployee_0] FOREIGN KEY ([Employee_m0]) REFERENCES [Employee]
CREATE INDEX HotelEmployee_IEmployee_m0 on [HotelEmployee] ([Employee_m0])

 ALTER TABLE [HotelEmployee] ADD CONSTRAINT [HotelEmployee_FHotel_0] FOREIGN KEY ([Hotel_m0]) REFERENCES [Hotel]
CREATE INDEX HotelEmployee_IHotel_m0 on [HotelEmployee] ([Hotel_m0])

 ALTER TABLE [Room] ADD CONSTRAINT [Room_FHotel_0] FOREIGN KEY ([Hotel_m0]) REFERENCES [Hotel]
CREATE INDEX Room_IHotel_m0 on [Room] ([Hotel_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

