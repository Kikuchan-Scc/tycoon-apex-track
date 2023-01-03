// ./components/main.js
import { useTranslation } from 'next-i18next'

export default function Main() {
    const { t } = useTranslation('main')
    return (
        <p>
            我在{t('tsinghua-university-library')}听着{t('taylor-swift')}的歌玩{t('genshin-impact')}。
        </p>
    )
}