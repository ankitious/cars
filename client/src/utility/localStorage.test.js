import { loadFavorites, saveFavorites } from "./localStorage";

Storage.prototype.getItem = jest.fn()
    .mockReturnValueOnce('10023,12345,45321')
    .mockReturnValueOnce(undefined)
    .mockReturnValueOnce(null);

Storage.prototype.setItem = jest.fn();

describe('loadFavorites', () => {
    it('loads favorites from local storage', () => {
        const favorites = loadFavorites();
        expect(favorites).toBeDefined();
        expect(favorites).toBe('10023,12345,45321');
    });

    it('returns undefined from local storage if not present', () => {
        const favorites = loadFavorites();
        expect(favorites).toBeUndefined();
    });

    it('returns undefined from local storage if getItem returns null', () => {
        const favorites = loadFavorites();
        expect(favorites).toBeUndefined();
    });
});

describe('saveFavorites', () => {
    it('saves data to local storage', () => {
        saveFavorites('13445,12323');
    });
});
