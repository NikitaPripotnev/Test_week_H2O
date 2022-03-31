import {inputs} from "./inputs";
import {rules} from "./rules";
import {fetchFormAction} from "./formActionService";
import {StageManager} from "./StageManager";
import {personnelInputs} from "../inputs/personnel";

export const PRIMARY_INFORMATION = ({orderType, orderCreator, isPassport, cleaningType, serviceType, counterparty, additionalService, source, prepaymentType, stages, user, archived}) => {
    let newInputs = [];
    if (rules[user.role]?.sections.primaryInformation) {
        let disabled = false;
        if (archived || stages.includes("ORDER_TO_DIVISION")) {
            disabled = true;
        }
        if (orderCreator) {
            newInputs.push([inputs.orderCreator(disabled), inputs.orderCreatedAt(disabled)]);
        }
        newInputs.push([inputs.cleaningType(disabled), inputs.orderType(disabled)]);
        newInputs.push([inputs.buildingType(disabled), inputs.buildingClass(disabled)]);
        newInputs.push(counterparty === "Физ. лицо" ? [inputs.counterparty(disabled), inputs.sex(disabled)] : [inputs.counterparty(disabled), inputs.organization(disabled)]);
        newInputs.push([inputs.contactInfo(disabled)]);
        newInputs.push([inputs.isPassport(disabled)]);
        if (isPassport) {
            newInputs.push([inputs.passportFullname(disabled), inputs.passportPhone(disabled), inputs.passportBirthday(disabled)]);
            newInputs.push([inputs.passportSeries(disabled), inputs.passportNumber(disabled), inputs.subdivisionCode(disabled), inputs.issuedDate(disabled)]);
            newInputs.push([inputs.issuedBy(disabled)]);
            newInputs.push([inputs.residencePlace(disabled)]);
        }
        newInputs.push([inputs.address(disabled)]);
        if (serviceType !== "Остекление") {
            newInputs.push([inputs.objectArea(disabled), inputs.bathroom(disabled)]);
        }
        newInputs.push([inputs.serviceType(disabled), inputs.additionalService(disabled)]);
        if (additionalService && additionalService.includes("Балкон")) {
            newInputs.push([inputs.balconies(disabled)]);
        }
        newInputs.push([inputs.windows(disabled)]);
        newInputs.push([inputs.comment(disabled)]);
        newInputs.push([inputs.services(disabled, serviceType)]);
        newInputs.push([inputs.cleaningDuration(disabled), inputs.cost(disabled)]);
        const prepaymentRow = [inputs.discount(disabled), inputs.prepaymentType(disabled)];
        if(prepaymentType==="На объекте"||prepaymentType==="Внесена"){
            prepaymentRow.push(inputs.prepaymentSelect(disabled))
        }
        if(prepaymentType==="Бронирование даты"||prepaymentType==="Выезд на осмотр"){
            prepaymentRow.push(inputs.prepaymentText(disabled))
        }
        newInputs.push([...prepaymentRow]);
        newInputs.push((source === "от Партнеров" || source === "Рекомендации" || source === "Абонемент" || source === "Рамочный договор" || source === "Объект из ППО") ?
            [inputs.attractionSource(disabled), inputs.sourceTypeText(disabled)] : [inputs.attractionSource(disabled), inputs.sourceTypeSelect(disabled)]);
        newInputs.push([inputs.crmLink(disabled)]);
        if (orderType === 'Уборка' && cleaningType === 'Разовая уборка') {
            newInputs.push([inputs.photosObject(disabled)]);
        }
    }


    return {
        title: 'Первичная информация',
        name: "primaryInformation",
        inputs: [...newInputs],
        active: true
    }
};

export const SELLING = ({responsibleManager, stages, currentStage, user, archived, responsibleUsers}) => {
    let newInputs = [];

    if (rules[user.role]?.sections.selling) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        let disabled = archived || stages.includes("ORDER_TO_DIVISION");

        if (responsibleManager) {
            newInputs.push([inputs.division(true), inputs.responsibleManager(true)]);
        } else {
            newInputs.push([inputs.division(disabled)]);
        }

        newInputs.push([inputs.cleaningDate(disabled), inputs.soldAt(disabled)]);

        if (stages.includes('TAKE_ORDER')) {
            newInputs.push([inputs.contract(), inputs.act()]);
        }
        if(availableAction){
            const action = fetchFormAction({archived, section: "SELLING", user, currentStage, responsibleUsers});
            if (action) {
                newInputs.push([action]);
            }
        }
    }
    return {
        title: 'Продажа',
        name: "selling",
        inputs: [...newInputs],
        active:true
    }

}


export const STARTING = ({stages, currentStage, user, archived, responsibleUsers}) => {
    let newInputs = [];
    if (rules[user?.role]?.sections.starting) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);

        if(user?.role==="ORDER_MANAGER"||user?.role==="CHIEF"){
            if (stages.includes("TAKE_ORDER") && currentStage !== "CHANGE_REQUEST") {
                newInputs.push([inputs.cleaningApprovalInfo(stages.includes("APPROVE_CLEANING"), false)]);
            }
            if (currentStage === "APPROVE_CLEANING") {
                newInputs.push([inputs.nzTask()]);
            }
            if (stages.includes("FILL_NZ_WITH_TASK")) {
                newInputs.push([inputs.nzFront()]);
            }
        }

        if (availableAction) {
            const action = fetchFormAction({archived, section: "STARTING", user, currentStage, responsibleUsers});
            if (action) {
                newInputs.push([action]);
            }
        }
    }
    return {
        title: 'Запуск уборки',
        name: "starting",
        inputs: newInputs,
        active: true
    }
}


export const FOREMAN_WORK_STARTING = ({reportDate, additionalServices, additionalServicesPhotos, stages, currentStage, user, archived, responsibleUserId}) => {
    const newInputs = [];

    if ((rules[user?.role]?.sections.foremanWorkStarting && (user.role !== "FOREMAN" || responsibleUserId === user.id))) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        const disabled = stages.includes("CLEANING_STARTED");
        const temporaryDisable = currentStage==="APPROVE_NZ"&&user.role==="ORDER_MANAGER";

        if (reportDate) {
            newInputs.push([inputs.division(true), inputs.foreman(true), inputs.reportDate(true)])
        } else {
            newInputs.push([inputs.division(true), inputs.foreman(true)])
        }

        newInputs.push([inputs.cleaningTask(true)]);

        (user.role === "CHIEF"||user.role === "FOREMAN") && newInputs.push([inputs.clientConfirmationInfo(stages.includes("CLIENT_CONFIRMATION"), false)]);

        const mainServicesApproved = stages.includes("ADD_SERVICES_RESPONSE");
        if (stages.includes("CLIENT_CONFIRMATION") && (availableAction || mainServicesApproved)) {
            newInputs.push([inputs.actualServices(mainServicesApproved)])
            newInputs.push([inputs.contractPhoto(mainServicesApproved)]);
        }

        additionalServicesPhotos && newInputs.push([inputs.additionalServicesPhotos(true)]);

        const addServicesApproved = stages.includes("ADD_SERVICES_TO_CONFIRMATION");
        if (additionalServices&&mainServicesApproved && (availableAction || addServicesApproved)) { //Проверять есть ли additionalService
            newInputs.push([inputs.additionalServices(disabled||!availableAction, currentStage==="ADD_SERVICES_RESPONSE")])
        }
        if (additionalServices&&addServicesApproved && (availableAction || disabled)) {
            newInputs.push([inputs.addContractPhoto(disabled)])
        }


        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "FOREMAN_WORK_STARTING",
                user,
                currentStage,
                responsibleUserId
            });
            if (action) {
                newInputs.push([action]);
            }
        }

    }
    return {
        title: 'Сверка с клиентом выполняемых услуг',
        name: "foremanReport",
        inputs: [...newInputs]
    }
}

export const FOREMAN_REPORT_OBJECT = ({reportDate, stages, currentStage, user, archived, responsibleUserId, actualCostCard}) => {
    const newInputs = [];

    if ((rules[user?.role]?.sections.foremanReportObject && (user.role !== "FOREMAN" || responsibleUserId === user.id))) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        const temporaryDisable = currentStage==="APPROVE_NZ_BACK"&&user.role==="ORDER_MANAGER";
        if (reportDate) {
            newInputs.push([inputs.division(true), inputs.foreman(true), inputs.reportDate(true)])
        } else {
            newInputs.push([inputs.division(true), inputs.foreman(true)])
        }

        newInputs.push([inputs.cleaningDate(true)])

        const workStarted = stages.includes("WORK_STARTING");

        if (stages.includes("CLEANING_STARTED") && (availableAction || workStarted)) {
            newInputs.push([inputs.workBeginning(workStarted)]);
        }

        const cleaningEnded = stages.includes("CLEANING_ENDED");
        if (workStarted){
            newInputs.push([inputs.foremanCheckList(cleaningEnded||(user.role!=="FOREMAN"&&user.role!=="CHIEF"))])
        }
        if (workStarted && (availableAction || cleaningEnded)) {
            newInputs.push([inputs.workProcess(cleaningEnded)]);
        }


        const workEnded = stages.includes("WORK_ENDING");
        if (cleaningEnded && (availableAction || workEnded)) {
            newInputs.push([inputs.actualCostCash(workEnded&&!temporaryDisable), inputs.actualCostCard(workEnded&&!temporaryDisable)]);
            actualCostCard>0&&newInputs.push([inputs.paymentCheck()]);
            newInputs.push([inputs.workEnding(workEnded)])
        }


        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "FOREMAN_REPORT_OBJECT",
                user,
                currentStage,
                responsibleUserId
            });
            if (action) {
                newInputs.push([action]);
            }
        }

    }
    return {
        title: 'Отчет бригадира (объект)',
        name: "foremanReport",
        inputs: [...newInputs]
    }
}

export const FOREMAN_REPORT_WAREHOUSE = ({reportDate, stages, currentStage, user, archived, responsibleUserId}) => {
    const newInputs = [];

    if ((rules[user?.role]?.sections.foremanReportWarehouse && (user.role !== "FOREMAN" || responsibleUserId === user.id))) {
        const disable = stages.includes("FOREMAN_REPORT");
        const temporaryDisable = currentStage==="APPROVE_NZ_BACK"&&user.role==="ORDER_MANAGER";
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);

        if (reportDate) {
            newInputs.push([inputs.division(true), inputs.foreman(true), inputs.reportDate(true)])
        } else {
            newInputs.push([inputs.division(true), inputs.foreman(true)])
        }

        if (stages.includes("ON_WAREHOUSE") && (availableAction || disable)) {
            newInputs.push([inputs.actualTitle()]);
            newInputs.push([inputs.actualObjectArea(disable&&!temporaryDisable), inputs.actualDurationCleaningTime(true), inputs.actualCleanerNumber(true), inputs.actualEmployeesSalary(true)])
            newInputs.push([inputs.actualExpansesTaxiThere(disable&&!temporaryDisable), inputs.actualExpansesTaxiBack(disable&&!temporaryDisable), inputs.actualExpansesPetrol(disable&&!temporaryDisable)]);
            newInputs.push([inputs.actualTeam(disable&&!temporaryDisable)]);
            newInputs.push([inputs.foremanComment(disable&&!temporaryDisable)]);
        }
        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "FOREMAN_REPORT_WAREHOUSE",
                user,
                currentStage,
                responsibleUserId
            });
            if (action) {
                newInputs.push([action]);
            }
        }


    }
    return {
        title: 'Отчет бригадира (склад)',
        name: "foremanReport",
        inputs: [...newInputs]
    }
}

export const TOOLS_REPORT = ({reportDate, stages, currentStage, user, archived, responsibleUserId}) => {
    const newInputs = [];
    if ((rules[user?.role]?.sections.toolsReport && (user.role !== "FOREMAN" || responsibleUserId === user.id))) {
        const disabled = stages.includes("TOOLS_REPORT");
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        const temporaryDisable = currentStage==="APPROVE_NZ_BACK"&&user.role==="ORDER_MANAGER";

        // if (reportDate) {
        //     newInputs.push([inputs.division(true), inputs.toolsManager(true), inputs.reportDate(true)])
        // } else {
        //     newInputs.push([inputs.division(true), inputs.toolsManager(true)])
        // }

        if (availableAction || disabled) {
            newInputs.push([inputs.actualConsumables(true), inputs.documentsReturn(disabled&&!temporaryDisable)]);
            newInputs.push([inputs.actualTools(disabled && !temporaryDisable)])
            newInputs.push([inputs.toolsComment(disabled && !temporaryDisable)]);
        }

        if (stages.includes("TOOLS_REPORT")) {
            newInputs.push([inputs.nzBack(true)])
        }

        if (availableAction) {
            const action = fetchFormAction({archived, section: "TOOLS_REPORT", user, currentStage, responsibleUserId});
            if (action) {
                newInputs.push([action]);
            }
        }

    }
    return {
        title: 'Возврат инвентаря',
        name: "toolsReport",
        inputs: [...newInputs]
    }
}

export const ORDER_MANAGER_REPORT = ({reportDate, stages, currentStage, user, archived}) => {
    const newInputs = [];

    if (rules[user?.role]?.sections.orderManagerReport) {
        if (reportDate) {
            newInputs.push([inputs.division(true), inputs.responsibleManager(true), inputs.reportDate(true)])
        } else {
            newInputs.push([inputs.division(true), inputs.responsibleManager(true)])
        }
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        const disabled = stages.includes("ORDER_MANAGER_REPORT");

        if (availableAction || disabled) {
            newInputs.push([inputs.orderManagerComment(disabled)]);
            newInputs.push([inputs.nzFrontPhoto(), inputs.nzBackPhoto()]);
        }

        if (availableAction) {
            const action = fetchFormAction({archived, section: "ORDER_MANAGER_REPORT", user, currentStage});
            if (action) {
                newInputs.push([action]);
            }
        }
    }
    return {
        title: 'Проверка менеджера',
        name: "orderManagerReport",
        inputs: [...newInputs]
    }
}

export const ORDER_MANAGER_ORDER_CLOSING = ({lastSection, sectionNumber, reportDate, stages, currentStage, user, archived}) => {
    const newInputs = [];

    if (rules[user?.role]?.sections.orderManagerOrderClosing) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        const disabled = !lastSection||stages.includes("TO_CHIEF_REPORT");

        if (reportDate) {
            newInputs.push([inputs.division(true), inputs.responsibleManager(true), inputs.reportDate(true)])
        }
        if (availableAction || !lastSection) {
            newInputs.push([inputs.additionalExpanses(disabled)]);
            newInputs.push([inputs.orderManagerComment(disabled)]);
            newInputs.push([inputs.mistakesFiles(disabled)]);
        }

        if (availableAction&&lastSection) {
            const action = fetchFormAction({archived, section: "ORDER_MANAGER_ORDER_CLOSING", user, currentStage});
            if (action) {
                newInputs.push([action]);
            }
        }
    }
    return {
        title: 'Исправление недочетов',
        name: "orderClosing."+sectionNumber,
        inputs: [...newInputs]
    }
}

export const OPERATOR_ORDER_CLOSING = ({lastSection, sectionNumber, reportDate, stages, currentStage, user, archived}) => {
    const newInputs = [];

    if (rules[user?.role]?.sections.operatorOrderClosing) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        const disabled = !lastSection||stages.includes("TO_CHIEF_REPORT");

        if (reportDate) {
            newInputs.push([inputs.division(true), inputs.responsibleManager(true), inputs.reportDate(true)])
        }
        if (availableAction || !lastSection) {
            newInputs.push([inputs.conflictResolutionInfo(disabled, false)]);
        }

        if (availableAction&&lastSection) {
            const action = fetchFormAction({archived, section: "OPERATOR_ORDER_CLOSING", user, currentStage});
            if (action) {
                newInputs.push([action]);
            }
        }
    }
    return {
        title: 'Улаживание конфликта',
        name: "orderClosing."+sectionNumber,
        inputs: [...newInputs]
    }
}


export const QUALITY_CONTROL = ({lastSection, sectionNumber, reportDate, stages, currentStage, user, archived, responsibleUserId}) => {
    const newInputs = [];
    //ТУТ логика available action теряется, нужно будет переписать
    if (rules[user?.role]?.sections.qualityControl&& (user.role !== "FOREMAN" || responsibleUserId === user.id)) {

        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role);
        const disabled = !lastSection||stages.includes("TO_CHIEF_DECISION");

        if (reportDate) {
            newInputs.push([inputs.division(true), inputs.responsibleManager(true), inputs.reportDate(true)])
        }
        if (user.role==="OPERATOR"||user.role==="CHIEF"||((user.role==="ORDER_MANAGER"||user.role==="FOREMAN")&&!lastSection)||stages.includes("TO_CHIEF_DECISION")) {
            newInputs.push([inputs.qualityRating(disabled), inputs.serviceRating(disabled), inputs.discountNextCleaning(disabled)]);
            newInputs.push([inputs.clientComment(disabled)]);
            newInputs.push([inputs.qualityControlComment(disabled)]);
            newInputs.push([inputs.qualityControlFiles(disabled)]);
        }

        if ((user.role==="OPERATOR"||user.role==="CHIEF")&&lastSection) {
            const action = fetchFormAction({archived, section: "QUALITY_CONTROL", user, currentStage});
            if (action) {
                newInputs.push([action]);
            }
        }

        return {
            title: 'Оценка качества',
            name: 'orderClosing.'+sectionNumber,
            inputs: newInputs
        }
    }
    return {
        title: 'Оценка качества',
        name: "orderClosing."+sectionNumber,
        inputs: []
    }

};

export const CHIEF_REPORT = ({reportDate, stages, currentStage, user, archived}) => {
    let newInputs = [];
    if (rules[user?.role]?.sections.chiefReport) {
        let disabled = stages.includes("CHIEF_REPORT")
        if (stages.includes("ORDER_CLOSED")) {
            newInputs.push([inputs.chiefExpansesReport(disabled)]);
        }

        const action = fetchFormAction({archived, section: "CHIEF_REPORT", user, currentStage});
        if (action) {
            newInputs.push([action]);
        }
    }
    return {
        title: 'Отчет руководителя',
        name: 'chiefReport',
        inputs: [...newInputs]
    }
};


export const ORDER_CLOSING = ({currentStage, user, archived}) => {
    if (rules[user?.role]?.sections.orderClosing) {
        return {
            title: 'Закрытие заявки',
            name: 'orderClosing',
            inputs: [
                StageManager.checkAvailableStageByRole(currentStage, user.role) && !archived ? [inputs.orderClosingAction()] : []
            ]
        }
    }
    return {
        title: 'Закрытие заявки',
        name: 'orderClosing',
        inputs: []
    }
};

export const INSPECTION = ({kpo, stages, currentStage, user, archived}) => {
    if (user.role === 'OPERATOR' || user.role === 'CHIEF' || user.role === 'ORDER_MANAGER') {
        let newInputs = [];
        if (stages.includes("TAKE_ORDER")) {
            newInputs.push([inputs.division(), inputs.responsibleManager(), inputs.inspectionDate()]);
        } else {
            newInputs.push([inputs.division()]);
        }
        if (stages.includes("SELECT_INSPECTION_DATE")) {
            newInputs.push([inputs.inspectionComment()]);
            if (kpo) {
                newInputs.push([inputs.kpo(), inputs.smeta()]);
            } else {
                newInputs.push([inputs.kpo()]);
            }
        }
        if (!archived && StageManager.checkAvailableStageByRole(currentStage, user.role)) {
            switch (currentStage) {
                case undefined:
                case null:
                case "ORDER_CREATION":
                    newInputs.push([inputs.orderToDivisionAction()]);
                    break;
                case "ORDER_TO_DIVISION":
                    newInputs.push([inputs.takeOrderAction()]);
                    break;
                case "TAKE_ORDER":
                    newInputs.push([inputs.selectInspectionDateAction()]);
                    break;
                case "SELECT_INSPECTION_DATE":
                    newInputs.push([inputs.toSellingAction()]);
                    break;
                default:
                    break;
            }
        }

        return {
            title: 'Осмотр/расчет',
            name: 'inspectionAndAccounting',
            inputs:
                [...newInputs]
        }
    }


    return {
        title: 'Осмотр/расчет',
        name: "inspectionAndAccounting",
        inputs: []
    }
};



//KPO
//*********************************************
export const CALCULATION_COMMERCIAL_OBJECTS = (createdAt) => ({
    title: 'Расчет коммерческих объектов',
    name: 'calculationCommercialObjects',
    inputs: [
        createdAt ? [inputs.responsibleManager(true), inputs.createdAt(true)] : [inputs.responsibleManager(true)],
        [inputs.buildingType(), inputs.serviceType()],
        [inputs.address()],
        [inputs.permitRegime()],
        [inputs.personnelRequirements()],
        [inputs.cleaningSchedule(), inputs.targetDate()],
        [inputs.paymentType(), inputs.tender(), inputs.technicalTask(), inputs.testSuitcase()],
        [inputs.contactPerson()],
        [inputs.comment()]
    ]
});

export const CALCULATION_PARAMETERS = {
    title: 'Параметры для расчета',
    name: 'calculationParameters',
    inputs: [
        [inputs.objectArea(), inputs.ceilingHeight(), inputs.bathroom()],
        [inputs.flooring()],
        [inputs.walls()],
        [inputs.stairs()],
        [inputs.furniture()],
        [inputs.pollutionDegree()],
    ]
};
export const ADDITIONAL_TYPES_WORK = {
    title: 'Дополнительные виды работ',
    name: 'additionalTypesWork',
    inputs: [
        [inputs.glazingWashing()],
        [inputs.industrialAlpinism()],
        [inputs.rotaryCleaning()],
        [inputs.dryCleaning()],
        [inputs.otherServices()],
        [inputs.workComplexity()]
    ]
}
//*********************************************

//KP
//*********************************************
export const KP_PRIMARY_INFORMATION = ({counterparty, source, createdAt}) => {
    return {
        title: 'Первичная информация',
        name: 'primaryInformation',
        inputs: [
            createdAt ? [inputs.division(true), inputs.responsibleManager(true), inputs.createdAt(true)] : [inputs.division(true), inputs.responsibleManager(true)],
            [inputs.cleaningType(), inputs.orderType()],
            [inputs.buildingType(), inputs.buildingClass()],
            counterparty === "Физ. лицо" ? [inputs.counterparty(), inputs.sex()] : [inputs.counterparty(), inputs.organization()],
            [inputs.clientFullname(), inputs.clientPhone()],
            [inputs.address()],
            [inputs.serviceType(), inputs.additionalService()],
            [inputs.cleaningDuration(), inputs.cost(), inputs.paymentType()],
            (source === "от Партнеров" || source === "Рекомендации" || source === "Абонемент" || source === "Рамочный договор" || source === "Объект из ППО") ?
                [inputs.attractionSource(), inputs.sourceTypeText()] : [inputs.attractionSource(), inputs.sourceTypeSelect()],
            [inputs.priceWithoutDiscount(), inputs.kpDiscount(), inputs.priceWithDiscount()],
            [inputs.kpCreatedAt(), inputs.kpDateEnd()],
            [inputs.kpComment()]
        ]
    }
};
//*********************************************


//CONTRACT
//*********************************************
export const CONTRACT_GENERAL_INFORMATION = () => ({
    title: 'Общая информация',
    name: 'contract',
    inputs: [
        [inputs.contractNumber(), inputs.contractDate(), inputs.cleaningDate(false, false)],
        [inputs.address()],
        [inputs.contractCost()],
        [inputs.serviceType(), inputs.additionalService()],
        [inputs.contractServices()]
    ]
});
//*********************************************


//NZ
//*********************************************
export const TASK = (stage, user) => {
    let disabled = false;
    if (user?.roleName !== "CHIEF" && user?.roleName !== "ORDER_MANAGER") {
        disabled = true;
    }
    if (stage === "FILL_NZ_WITH_TASK") {
        disabled = true;
    }
    return {
        title: 'Задача',
        name: 'nzTask',
        active: true,
        inputs: [
            [inputs.serviceType(true), inputs.cleaningDate(true)],
            [inputs.contactInfo(true)],
            [inputs.address(true)],
            [inputs.buildingType(true), inputs.buildingClass(true)],
            [inputs.responsibleManager(true), inputs.foreman(disabled), inputs.totalCost(true)],
            [inputs.cleaningTask(disabled)],
            [inputs.objectArea(true), inputs.durationCleaningTime(disabled), inputs.cleanerNumber(disabled), inputs.employeesSalary(disabled), inputs.consumables(disabled)],
            [inputs.documentsStatus(disabled)],
            [inputs.logisticTitle()],
            [inputs.logisticExpansesTaxiRouteThere(disabled), inputs.logisticExpansesTaxiRouteBack(disabled), inputs.logisticExpansesPetrolRoute(disabled)],
        ]
    }
};


//NZ
//*********************************************
export const PERSONNEL = () => {
    return {
        title: 'Информация о сотруднике',
        name: 'personnel',
        inputs: [
            [personnelInputs.fullname(false), personnelInputs.birthday(false), personnelInputs.phone(false)],
            [personnelInputs.division(false), personnelInputs.jobPosition(false), personnelInputs.rank(false)],
            [personnelInputs.savePersonnelAction(false)]
        ]
    }
};