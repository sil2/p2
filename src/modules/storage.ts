import { ViteSetupModule } from '@/types/ViteSetupModule';
import { useStorage } from "vue3-storage";

export const install: ViteSetupModule = ({ isClient, initialState, app }) => {
    const storage = useStorage();
    app.use(storage);
};
