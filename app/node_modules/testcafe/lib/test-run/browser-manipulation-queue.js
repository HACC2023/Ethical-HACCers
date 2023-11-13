"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const device_specs_1 = require("device-specs");
const utils_1 = require("./commands/utils");
const type_1 = __importDefault(require("./commands/type"));
const warning_message_1 = __importDefault(require("../notifications/warning-message"));
const test_run_1 = require("../errors/test-run/");
class BrowserManipulationQueue {
    constructor(browserConnection, screenshotCapturer, warningLog) {
        this.commands = [];
        this.browserId = browserConnection.id;
        this.browserProvider = browserConnection.provider;
        this.screenshotCapturer = screenshotCapturer;
        this.warningLog = warningLog;
    }
    async _resizeWindow(width, height, currentWidth, currentHeight) {
        const canResizeWindow = await this.browserProvider.canResizeWindowToDimensions(this.browserId, width, height);
        if (!canResizeWindow)
            throw new test_run_1.WindowDimensionsOverflowError();
        try {
            return await this.browserProvider.resizeWindow(this.browserId, width, height, currentWidth, currentHeight);
        }
        catch (err) {
            this.warningLog.addWarning(warning_message_1.default.resizeError, err.message);
            return null;
        }
    }
    async _resizeWindowToFitDevice(device, portrait, currentWidth, currentHeight) {
        const { landscapeWidth, portraitWidth } = (0, device_specs_1.getViewportSize)(device);
        const width = portrait ? portraitWidth : landscapeWidth;
        const height = portrait ? landscapeWidth : portraitWidth;
        return await this._resizeWindow(width, height, currentWidth, currentHeight);
    }
    async _maximizeWindow() {
        try {
            return await this.browserProvider.maximizeWindow(this.browserId);
        }
        catch (err) {
            this.warningLog.addWarning(warning_message_1.default.maximizeError, err.message);
            return null;
        }
    }
    async _takeScreenshot(capture) {
        return capture();
    }
    async _executeCommand(driverMsg) {
        const command = this.commands.shift();
        switch (command.type) {
            case type_1.default.takeElementScreenshot:
            case type_1.default.takeScreenshot:
                return await this._takeScreenshot(() => this.screenshotCapturer.captureAction({
                    actionId: command.actionId,
                    customPath: command.path,
                    pageDimensions: driverMsg.pageDimensions,
                    cropDimensions: driverMsg.cropDimensions,
                    markSeed: command.markSeed,
                    fullPage: command.fullPage,
                    thumbnails: command.thumbnails,
                }));
            case type_1.default.takeScreenshotOnFail:
                return await this._takeScreenshot(() => this.screenshotCapturer.captureError({
                    actionId: command.actionId,
                    failedActionId: command.failedActionId,
                    pageDimensions: driverMsg.pageDimensions,
                    markSeed: command.markSeed,
                    fullPage: command.fullPage,
                }));
            case type_1.default.resizeWindow:
                return await this._resizeWindow(command.width, command.height, driverMsg.pageDimensions.innerWidth, driverMsg.pageDimensions.innerHeight);
            case type_1.default.resizeWindowToFitDevice:
                return await this._resizeWindowToFitDevice(command.device, command.options.portraitOrientation, driverMsg.pageDimensions.innerWidth, driverMsg.pageDimensions.innerHeight);
            case type_1.default.maximizeWindow:
                return await this._maximizeWindow();
        }
        return null;
    }
    async executePendingManipulation(driverMsg, messageBus) {
        const command = this.commands[0];
        const handleBrowserManipulationWarning = warning => {
            warning.actionId = warning.actionId || command.actionId;
        };
        messageBus.on('before-warning-add', handleBrowserManipulationWarning);
        const result = await this._executeCommand(driverMsg);
        messageBus.off('before-warning-add', handleBrowserManipulationWarning);
        return result;
    }
    push(command) {
        this.commands.push(command);
    }
    removeAllNonServiceManipulations() {
        this.commands = this.commands.filter(command => (0, utils_1.isServiceCommand)(command));
    }
}
exports.default = BrowserManipulationQueue;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1tYW5pcHVsYXRpb24tcXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC1ydW4vYnJvd3Nlci1tYW5pcHVsYXRpb24tcXVldWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsNENBQW9EO0FBQ3BELDJEQUEyQztBQUMzQyx1RkFBK0Q7QUFDL0Qsa0RBQW9FO0FBRXBFLE1BQXFCLHdCQUF3QjtJQUN6QyxZQUFhLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFVBQVU7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBWSxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBTSxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQVcsVUFBVSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGFBQWE7UUFDM0QsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTlHLElBQUksQ0FBQyxlQUFlO1lBQ2hCLE1BQU0sSUFBSSx3Q0FBNkIsRUFBRSxDQUFDO1FBRTlDLElBQUk7WUFDQSxPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztTQUM5RztRQUNELE9BQU8sR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMs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Z2V0Vmlld3BvcnRTaXplIH0gZnJvbSAnZGV2aWNlLXNwZWNzJztcbmltcG9ydCB7IGlzU2VydmljZUNvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmRzL3V0aWxzJztcbmltcG9ydCBDT01NQU5EX1RZUEUgZnJvbSAnLi9jb21tYW5kcy90eXBlJztcbmltcG9ydCBXQVJOSU5HX01FU1NBR0UgZnJvbSAnLi4vbm90aWZpY2F0aW9ucy93YXJuaW5nLW1lc3NhZ2UnO1xuaW1wb3J0IHsgV2luZG93RGltZW5zaW9uc092ZXJmbG93RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvdGVzdC1ydW4vJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3Nlck1hbmlwdWxhdGlvblF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvciAoYnJvd3NlckNvbm5lY3Rpb24sIHNjcmVlbnNob3RDYXB0dXJlciwgd2FybmluZ0xvZykge1xuICAgICAgICB0aGlzLmNvbW1hbmRzICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLmJyb3dzZXJJZCAgICAgICAgICA9IGJyb3dzZXJDb25uZWN0aW9uLmlkO1xuICAgICAgICB0aGlzLmJyb3dzZXJQcm92aWRlciAgICA9IGJyb3dzZXJDb25uZWN0aW9uLnByb3ZpZGVyO1xuICAgICAgICB0aGlzLnNjcmVlbnNob3RDYXB0dXJlciA9IHNjcmVlbnNob3RDYXB0dXJlcjtcbiAgICAgICAgdGhpcy53YXJuaW5nTG9nICAgICAgICAgPSB3YXJuaW5nTG9nO1xuICAgIH1cblxuICAgIGFzeW5jIF9yZXNpemVXaW5kb3cgKHdpZHRoLCBoZWlnaHQsIGN1cnJlbnRXaWR0aCwgY3VycmVudEhlaWdodCkge1xuICAgICAgICBjb25zdCBjYW5SZXNpemVXaW5kb3cgPSBhd2FpdCB0aGlzLmJyb3dzZXJQcm92aWRlci5jYW5SZXNpemVXaW5kb3dUb0RpbWVuc2lvbnModGhpcy5icm93c2VySWQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmICghY2FuUmVzaXplV2luZG93KVxuICAgICAgICAgICAgdGhyb3cgbmV3IFdpbmRvd0RpbWVuc2lvbnNPdmVyZmxvd0Vycm9yKCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmJyb3dzZXJQcm92aWRlci5yZXNpemVXaW5kb3codGhpcy5icm93c2VySWQsIHdpZHRoLCBoZWlnaHQsIGN1cnJlbnRXaWR0aCwgY3VycmVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy53YXJuaW5nTG9nLmFkZFdhcm5pbmcoV0FSTklOR19NRVNTQUdFLnJlc2l6ZUVycm9yLCBlcnIubWVzc2FnZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgX3Jlc2l6ZVdpbmRvd1RvRml0RGV2aWNlIChkZXZpY2UsIHBvcnRyYWl0LCBjdXJyZW50V2lkdGgsIGN1cnJlbnRIZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeyBsYW5kc2NhcGVXaWR0aCwgcG9ydHJhaXRXaWR0aCB9ID0gZ2V0Vmlld3BvcnRTaXplKGRldmljZSk7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggID0gcG9ydHJhaXQgPyBwb3J0cmFpdFdpZHRoIDogbGFuZHNjYXBlV2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBvcnRyYWl0ID8gbGFuZHNjYXBlV2lkdGggOiBwb3J0cmFpdFdpZHRoO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9yZXNpemVXaW5kb3cod2lkdGgsIGhlaWdodCwgY3VycmVudFdpZHRoLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhc3luYyBfbWF4aW1pemVXaW5kb3cgKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYnJvd3NlclByb3ZpZGVyLm1heGltaXplV2luZG93KHRoaXMuYnJvd3NlcklkKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLndhcm5pbmdMb2cuYWRkV2FybmluZyhXQVJOSU5HX01FU1NBR0UubWF4aW1pemVFcnJvciwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBfdGFrZVNjcmVlbnNob3QgKGNhcHR1cmUpIHtcbiAgICAgICAgcmV0dXJuIGNhcHR1cmUoKTtcbiAgICB9XG5cbiAgICBhc3luYyBfZXhlY3V0ZUNvbW1hbmQgKGRyaXZlck1zZykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5jb21tYW5kcy5zaGlmdCgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfVFlQRS50YWtlRWxlbWVudFNjcmVlbnNob3Q6XG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfVFlQRS50YWtlU2NyZWVuc2hvdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fdGFrZVNjcmVlbnNob3QoKCkgPT4gdGhpcy5zY3JlZW5zaG90Q2FwdHVyZXIuY2FwdHVyZUFjdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbklkOiAgICAgICBjb21tYW5kLmFjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21QYXRoOiAgICAgY29tbWFuZC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYWdlRGltZW5zaW9uczogZHJpdmVyTXNnLnBhZ2VEaW1lbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICBjcm9wRGltZW5zaW9uczogZHJpdmVyTXNnLmNyb3BEaW1lbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICBtYXJrU2VlZDogICAgICAgY29tbWFuZC5tYXJrU2VlZCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbFBhZ2U6ICAgICAgIGNvbW1hbmQuZnVsbFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbHM6ICAgICBjb21tYW5kLnRodW1ibmFpbHMsXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfVFlQRS50YWtlU2NyZWVuc2hvdE9uRmFpbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fdGFrZVNjcmVlbnNob3QoKCkgPT4gdGhpcy5zY3JlZW5zaG90Q2FwdHVyZXIuY2FwdHVyZUVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uSWQ6ICAgICAgIGNvbW1hbmQuYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgIGZhaWxlZEFjdGlvbklkOiBjb21tYW5kLmZhaWxlZEFjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBwYWdlRGltZW5zaW9uczogZHJpdmVyTXNnLnBhZ2VEaW1lbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICBtYXJrU2VlZDogICAgICAgY29tbWFuZC5tYXJrU2VlZCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbFBhZ2U6ICAgICAgIGNvbW1hbmQuZnVsbFBhZ2UsXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfVFlQRS5yZXNpemVXaW5kb3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3Jlc2l6ZVdpbmRvdyhjb21tYW5kLndpZHRoLCBjb21tYW5kLmhlaWdodCwgZHJpdmVyTXNnLnBhZ2VEaW1lbnNpb25zLmlubmVyV2lkdGgsIGRyaXZlck1zZy5wYWdlRGltZW5zaW9ucy5pbm5lckhlaWdodCk7XG5cbiAgICAgICAgICAgIGNhc2UgQ09NTUFORF9UWVBFLnJlc2l6ZVdpbmRvd1RvRml0RGV2aWNlOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9yZXNpemVXaW5kb3dUb0ZpdERldmljZShjb21tYW5kLmRldmljZSwgY29tbWFuZC5vcHRpb25zLnBvcnRyYWl0T3JpZW50YXRpb24sIGRyaXZlck1zZy5wYWdlRGltZW5zaW9ucy5pbm5lcldpZHRoLCBkcml2ZXJNc2cucGFnZURpbWVuc2lvbnMuaW5uZXJIZWlnaHQpO1xuXG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfVFlQRS5tYXhpbWl6ZVdpbmRvdzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fbWF4aW1pemVXaW5kb3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIGV4ZWN1dGVQZW5kaW5nTWFuaXB1bGF0aW9uIChkcml2ZXJNc2csIG1lc3NhZ2VCdXMpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuY29tbWFuZHNbMF07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlQnJvd3Nlck1hbmlwdWxhdGlvbldhcm5pbmcgPSB3YXJuaW5nID0+IHtcbiAgICAgICAgICAgIHdhcm5pbmcuYWN0aW9uSWQgPSB3YXJuaW5nLmFjdGlvbklkIHx8IGNvbW1hbmQuYWN0aW9uSWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVzc2FnZUJ1cy5vbignYmVmb3JlLXdhcm5pbmctYWRkJywgaGFuZGxlQnJvd3Nlck1hbmlwdWxhdGlvbldhcm5pbmcpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2V4ZWN1dGVDb21tYW5kKGRyaXZlck1zZyk7XG5cbiAgICAgICAgbWVzc2FnZUJ1cy5vZmYoJ2JlZm9yZS13YXJuaW5nLWFkZCcsIGhhbmRsZUJyb3dzZXJNYW5pcHVsYXRpb25XYXJuaW5nKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1c2ggKGNvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKGNvbW1hbmQpO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbE5vblNlcnZpY2VNYW5pcHVsYXRpb25zICgpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kcyA9IHRoaXMuY29tbWFuZHMuZmlsdGVyKGNvbW1hbmQgPT4gaXNTZXJ2aWNlQ29tbWFuZChjb21tYW5kKSk7XG4gICAgfVxufVxuIl19