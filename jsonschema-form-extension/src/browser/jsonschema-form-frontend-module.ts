import { JsonschemaFormCommandContribution, JsonschemaFormMenuContribution } from './jsonschema-form-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { OpenHandler, WidgetFactory } from "@theia/core/lib/browser";
import { ContainerModule } from "inversify";
import { JsonschemaFormWidget, JsonschemaFormWidgetOptions } from './jsonschema-form-widget';
import { JsonschemaFormOpenHandler } from './jsonschema-form-open-handler';
import URI from '@theia/core/lib/common/uri';

export default new ContainerModule(bind => {
    // add your contribution bindings here

    bind(CommandContribution).to(JsonschemaFormCommandContribution).inSingletonScope();
    bind(MenuContribution).to(JsonschemaFormMenuContribution).inSingletonScope();

    bind(OpenHandler).to(JsonschemaFormOpenHandler).inSingletonScope();
    bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: JsonschemaFormWidget.id,
        createWidget: (uri: string) => {
            const child = container.createChild();
            child.bind(JsonschemaFormWidgetOptions).toConstantValue({
                uri: new URI(uri)
            });
            child.bind(JsonschemaFormWidget).toSelf();
            return child.get(JsonschemaFormWidget);
        }
    }));
});